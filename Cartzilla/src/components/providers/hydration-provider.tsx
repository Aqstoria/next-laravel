'use client';

import { useEffect, useState } from 'react';

interface HydrationProviderProps {
  children: React.ReactNode;
}

export default function HydrationProvider({ children }: HydrationProviderProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Remove browser extension attributes that cause hydration mismatches
    const removeExtensionAttributes = () => {
      const elements = document.querySelectorAll('[bis_skin_checked]');
      elements.forEach(element => {
        element.removeAttribute('bis_skin_checked');
      });
    };

    // Run after hydration
    setIsHydrated(true);
    
    // Remove attributes immediately
    removeExtensionAttributes();
    
    // Set up observer to remove attributes as they're added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.hasAttribute('bis_skin_checked')) {
              element.removeAttribute('bis_skin_checked');
            }
            // Check child elements
            const children = element.querySelectorAll('[bis_skin_checked]');
            children.forEach(child => {
              child.removeAttribute('bis_skin_checked');
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['bis_skin_checked']
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Always render children, but handle browser extension attributes after hydration
  return <>{children}</>;
} 