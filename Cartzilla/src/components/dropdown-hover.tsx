'use client'

import React, { Children, useState, useCallback, useRef, useEffect } from 'react'
import Dropdown, { DropdownProps } from 'react-bootstrap/Dropdown'
import { ToggleMetadata } from '@restart/ui/Dropdown'

const DropdownHover: React.FC<DropdownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownToggleRef = useRef<HTMLDivElement>(null)

  const handleDropdownOpen = useCallback(
    (event: React.MouseEvent) => {
      // We need to check whethere this event is triggered from the correct element
      // other way closing the dropdown by hitting the ESC key will not work.
      // Example: when the dropdown is open by focusing the toggle element and the
      // user navigates to .dropdown-item via the keyboard, and then user will hit
      // the ESC key, while focusing the .dropdown-item, the focus will be moved to
      // the dropdown toggle element, and this will trigger the handleDropdownOpen
      // again, and the dropdown will be opened again. This will lead to an unwanted
      // behavior when user have to hit the ESC key twice to close the dropdown.
      const skipOpen = event.relatedTarget && event.type === 'focus' && dropdownRef.current?.contains(event.relatedTarget as Node)

      if (!isTouchDevice && !skipOpen) {
        setIsOpen(true)
      }
    },
    [isTouchDevice, dropdownRef]
  )

  const handleDropdownClose = useCallback(
    (event: React.MouseEvent) => {
      if (!isTouchDevice) {
        setIsOpen(false)
      }
    },
    [isTouchDevice]
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
        event.preventDefault()
      }
    },
    [isOpen]
  )

  const handleDropdownOnToggle = (nextShow: boolean, meta: ToggleMetadata) => {
    // Only handle toggle events from touch devices
    if (isTouchDevice) {
      // For nested dropdowns the original Dropdown component, once you will click on any item inside the DropDownMenu,
      // will fire the "select" event which will try to close the dropdown. This is not the behavior we want.
      // Basically, for touch devices dropdown (a) should stay open when you click on any item inside the dropdown
      // and (b) should close when you click outside the dropdown. We will override the value of nextShow in case
      // if the meta.source === 'select' and nextShow is false.
      if (meta.source === 'select' && !nextShow) {
        setIsOpen(true)
      } else {
        setIsOpen(nextShow)
      }
      if (props.onToggle) {
        props.onToggle(nextShow, meta)
      }
    } else if (typeof meta.source === 'string' && !['click', 'rootClose'].includes(meta.source)) {
      // For non-touch devices, only handle non-click toggle events
      setIsOpen(nextShow)
      if (props.onToggle) {
        props.onToggle(nextShow, meta)
      }
    }
  }

  useEffect(() => {
    const isTouchEnabled = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0

    setIsTouchDevice(isTouchEnabled)

    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyDown)

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, isTouchDevice, dropdownRef, dropdownToggleRef, handleKeyDown])

  // This function will be called recursively to modify the children.
  // It will try to find a component, which has the className prop and it contains 'with-focus' class.
  // We will add onFocus and onBlur events to this component.
  const modifyWithFocusComponent = (children: React.ReactNode): React.ReactNode => {
    return Children.map(children, (child) => {
      // If child is not a valid React element, return it as is
      if (React.isValidElement(child) === false) {
        return child
      }

      // At this point we know that child is a valid React element
      const reactElement = child as React.ReactElement<any>

      // If reactElement.props will contain the className with 'with-focus' as one of the classes,
      // then we will consider this component as a DropdownToggle and modify it.
      const { className } = reactElement.props || {}
      if (typeof className === 'string' && className.includes('with-focus')) {
        return React.cloneElement(reactElement, {
          ...(typeof reactElement.props === 'object' ? reactElement.props : {}),
          ref: dropdownToggleRef,
          onFocus: handleDropdownOpen,
          onMouseEnter: handleDropdownOpen,
        })
      }

      // If ReactElement has children, recursively call this function
      if (reactElement.props?.children) {
        return React.cloneElement(reactElement, {
          ...(typeof reactElement.props === 'object' ? reactElement.props : {}),
          children: modifyWithFocusComponent(reactElement.props.children),
        })
      }

      // If nothing matched, return the element as is
      return reactElement
    })
  }

  return (
    <Dropdown
      {...props}
      ref={dropdownRef}
      show={isOpen}
      onToggle={handleDropdownOnToggle}
      onMouseLeave={handleDropdownClose}
    >
      {modifyWithFocusComponent(props.children)}
    </Dropdown>
  )
}

export default DropdownHover
