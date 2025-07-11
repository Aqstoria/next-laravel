interface DocsNavItemProps {
  title: string
  href: string
  tags?: string[]
  children?: DocsNavItemProps[]
  target?: string
  rel?: string
}

interface DocsNavSection {
  title: string
  icon: string
  children?: DocsNavItemProps[]
}

const navigation: DocsNavSection[] = [
  {
    title: 'Getting started',
    icon: 'ci-book fs-lg text-success me-2',
    children: [
      {
        title: 'Installation',
        href: '/docs/installation',
        tags: ['setup', 'npm', 'prerequisites'],
        children: [
          {
            title: 'Prerequisites',
            href: '/docs/installation#prerequisites',
          },
          {
            title: 'Editor and CLI',
            href: '/docs/installation#editor-cli',
          },
          {
            title: 'Install Node.js',
            href: '/docs/installation#install-node',
          },
        ],
      },
      {
        title: 'Npm commands (Scripts)',
        href: '/docs/npm-commands',
        tags: ['dev', 'build', 'build-icon-font', 'build-rtl-css', 'lint'],
        children: [],
      },
      {
        title: 'File structure',
        href: '/docs/file-structure',
        tags: ['project', 'folders'],
        children: [],
      },
      {
        title: 'Configuration files',
        href: '/docs/configuration-files',
        tags: [
          'package.json',
          'next.config',
          'tsconfig',
          'editorconfig',
          'eslintrc',
          'gitignore',
          'prettierignore',
          'prettierrc',
          'stylelintignore',
          'stylelintrc',
          'webmanifest',
          'manifest.json',
        ],
        children: [],
      },
      // {
      //   title: 'Progressive Web App (PWA)',
      //   href: '/docs/pwa',
      //   tags: ['service worker', 'manifest'],
      //   children: [
      //     {
      //       title: 'How to use available PWA features in Cartzilla',
      //       href: '/docs/pwa#pwa-use',
      //     },
      //     {
      //       title: 'How to disable PWA functionality entirely',
      //       href: '/docs/pwa#pwa-disable',
      //     },
      //     {
      //       title: 'Advanced topics',
      //       href: '/docs/pwa#pwa-advanced',
      //     },
      //   ],
      // },
      {
        title: 'Icon font',
        href: '/docs/icon-font',
        children: [
          {
            title: 'Using icons',
            href: '/docs/icon-font#using-icons',
          },
          {
            title: 'Adding new icons',
            href: '/docs/icon-font#adding-icons',
          },
          {
            title: 'Removing icons',
            href: '/docs/icon-font#removing-icons',
          },
        ],
      },
      {
        title: 'Browser support',
        href: '/docs/browser-support',
        tags: ['autoprefixer'],
      },
      {
        title: 'Right-to-Left (RTL)',
        href: '/docs/rtl',
        tags: ['direction'],
        children: [
          {
            title: 'Enabling RTL support',
            href: '/docs/rtl#enable-rtl',
          },
          {
            title: 'Disabling RTL support',
            href: '/docs/rtl#disable-rtl',
          },
          {
            title: 'How RTL support works',
            href: '/docs/rtl#howto-rtl',
          },
          {
            title: 'Tips for working with RTL',
            href: '/docs/rtl#rtl-tips',
          },
        ],
      },
      {
        title: 'Deployment guide',
        href: 'https://nextjs.org/docs/app/building-your-application/deploying',
        tags: ['launch', 'hosting', 'publishing', 'rollout', 'go-live'],
        target: '_blank',
        rel: 'noreferrer',
      },
      {
        title: 'Source and credits',
        href: '/docs/credits',
        tags: ['resources', 'plugins', 'libraries', 'frameworks', 'assets'],
      },
      // {
      //   title: 'Changelog',
      //   href: '/docs/changelog',
      //   tags: ['updates'],
      // },
    ],
  },
  {
    title: 'Customize',
    icon: 'ci-settings fs-lg text-primary me-2',
    children: [
      {
        title: 'Global options',
        href: '/docs/options',
        tags: ['colors', 'color modes', 'css variables'],
        children: [],
      },
      {
        title: 'Colors',
        href: '/docs/colors',
        tags: ['grayscale', 'primary', 'secondary', 'info', 'warning', 'success', 'danger', 'dark', 'light'],
        children: [
          {
            title: 'Grayscale and Theme colors',
            href: '/docs/colors#colors-gray-theme',
          },
          {
            title: 'Color modes dependant colors',
            href: '/docs/colors#colors-modes',
          },
          {
            title: 'Customizing colors',
            href: '/docs/colors#colors-customize',
          },
        ],
      },
      {
        title: 'Color modes (Light/Dark)',
        href: '/docs/color-modes',
        tags: ['themes', 'light mode', 'dark mode'],
        children: [
          {
            title: 'Only Light mode, removing Dark mode entirely',
            href: '/docs/color-modes#only-light-mode',
          },
          {
            title: 'Only Dark mode, disabling the Light mode option',
            href: '/docs/color-modes#only-dark-mode',
          },
          {
            title: 'Setting Dark mode as the default',
            href: '/docs/color-modes#default-dark-mode',
          },
        ],
      },
      {
        title: 'CSS variables',
        href: '/docs/css-variables',
        children: [
          {
            title: 'Discovering CSS variables',
            href: '/docs/css-variables#discover-css-variables',
          },
          {
            title: 'Customizing the template using CSS variables',
            href: '/docs/css-variables#customize-css-variables',
          },
        ],
      },
    ],
  },
  {
    title: 'Content',
    icon: 'ci-file-text fs-lg text-secondary me-2',
    children: [
      {
        title: 'Typography',
        href: '/docs/typography',
        tags: [
          'text',
          'font',
          'heading',
          'title',
          'paragraph',
          'list',
          'ordered',
          'unordered',
          'description',
          'blockquote',
          'quotation',
          'abbreviation',
        ],
        children: [
          {
            title: 'Headings',
            href: '/docs/typography#type-headings',
          },
          {
            title: 'Display headings',
            href: '/docs/typography#type-displays',
          },
          {
            title: 'Body text sizes',
            href: '/docs/typography#type-body-text',
          },
          {
            title: 'Inline text elements',
            href: '/docs/typography#type-inline',
          },
          {
            title: 'Abbreviations',
            href: '/docs/typography#type-abbreviations',
          },
          {
            title: 'Blockquote',
            href: '/docs/typography#type-blockquote',
          },
          {
            title: 'Lists: Unordered and ordered',
            href: '/docs/typography#type-lists',
          },
          {
            title: 'Lists: Unstyled',
            href: '/docs/typography#type-lists-unstyled',
          },
          {
            title: 'Lists: Inline',
            href: '/docs/typography#type-lists-inline',
          },
          {
            title: 'Description list basic example',
            href: '/docs/typography#type-description-list',
          },
          {
            title: 'Description list alignment',
            href: '/docs/typography#type-description-list-align',
          },
        ],
      },
      {
        title: 'Icons',
        href: '/docs/icons',
        children: [
          {
            title: 'UI icons',
            href: '/docs/icons#icons-ui',
          },
          {
            title: 'Brand icons',
            href: '/docs/icons#icons-brand',
          },
          {
            title: 'Animate on hover',
            href: '/docs/icons#icons-animation',
          },
          {
            title: 'Icon with text',
            href: '/docs/icons#icons-text',
          },
        ],
      },
      {
        title: 'Code',
        href: '/docs/code',
        tags: ['pre', 'kbd', 'highlight'],
        children: [
          {
            title: 'Inline code',
            href: '/docs/code#code-inline',
          },
          {
            title: 'User input',
            href: '/docs/code#code-user-input',
          },
          {
            title: 'Variables',
            href: '/docs/code#code-variables',
          },
          {
            title: 'Code block',
            href: '/docs/code#code-block',
          },
          {
            title: 'Code block scrollable',
            href: '/docs/code#code-scrollable',
          },
          {
            title: 'Code highlighting',
            href: '/docs/code#code-highlighting',
          },
        ],
      },
      {
        title: 'Images & figures',
        href: '/docs/images',
        tags: ['thumbnails', 'picture', 'figures', 'caption'],
        children: [
          {
            title: 'Image shapes',
            href: '/docs/images#image-shapes',
          },
          {
            title: 'Thumbnails',
            href: '/docs/images#image-thumbnails',
          },
          {
            title: 'Figures with caption',
            href: '/docs/images#figures',
          },
          {
            title: 'Image swap on hover',
            href: '/docs/images#image-swap',
          },
          {
            title: 'Image scale on hover',
            href: '/docs/images#image-scale',
          },
        ],
      },
      {
        title: 'Tables',
        href: '/docs/tables',
        children: [
          {
            title: 'Basic example',
            href: '/docs/tables#table-basic',
          },
          {
            title: 'Fuzzy search',
            href: '/docs/tables#table-search',
          },
          {
            title: 'Sorting',
            href: '/docs/tables#table-sorting',
          },
          {
            title: 'Dark table',
            href: '/docs/tables#table-dark',
          },
          {
            title: 'Striped rows',
            href: '/docs/tables#table-striped-rows',
          },
          {
            title: 'Striped columns',
            href: '/docs/tables#table-striped-cols',
          },
          {
            title: 'Bordered table',
            href: '/docs/tables#table-bordered',
          },
          {
            title: 'Table without borders',
            href: '/docs/tables#table-borderless',
          },
          {
            title: 'Hoverable rows',
            href: '/docs/tables#table-hoverable',
          },
          {
            title: 'Contextual colors',
            href: '/docs/tables#table-contextual',
          },
          {
            title: 'Color borders',
            href: '/docs/tables#table-color-borders',
          },
        ],
      },
    ],
  },
  {
    title: 'Components',
    icon: 'ci-layers fs-lg text-info me-2',
    children: [
      {
        title: 'Accordion',
        href: '/docs/accordion',
        tags: ['collapse'],
        children: [
          {
            title: 'Basic example',
            href: '/docs/accordion#accordion-basic',
          },
          {
            title: 'Alternative button icon',
            href: '/docs/accordion#accordion-alt-icon',
          },
          {
            title: 'With icons',
            href: '/docs/accordion#accordion-icons',
          },
          {
            title: 'Sizing',
            href: '/docs/accordion#accordion-sizing',
          },
        ],
      },
      {
        title: 'Alerts',
        href: '/docs/alerts',
        tags: ['notification', 'callout'],
        children: [
          {
            title: 'Basic example',
            href: '/docs/alerts#alerts-basic',
          },
          {
            title: 'Alert with icon',
            href: '/docs/alerts#alerts-icon',
          },
          {
            title: 'Dismissible alerts',
            href: '/docs/alerts#alerts-dismissible',
          },
          {
            title: 'Additional content',
            href: '/docs/alerts#alerts-additional-content',
          },
        ],
      },
      {
        title: 'Badges',
        href: '/docs/badges',
        tags: ['count', 'indicator'],
        children: [
          {
            title: 'Solid',
            href: '/docs/badges#badges-solid',
          },
          {
            title: 'Outline',
            href: '/docs/badges#badges-outline',
          },
          {
            title: 'Subtle',
            href: '/docs/badges#badges-subtle',
          },
          {
            title: 'Badge with icon',
            href: '/docs/badges#badges-icon',
          },
          {
            title: 'Shapes',
            href: '/docs/badges#badges-shapes',
          },
          {
            title: 'Inside heading',
            href: '/docs/badges#badges-heading',
          },
          {
            title: 'Inside button',
            href: '/docs/badges#badges-button',
          },
          {
            title: 'Inside list group',
            href: '/docs/badges#badges-list-group',
          },
        ],
      },
      {
        title: 'Blog components',
        href: '/docs/blog-components',
        tags: ['post', 'article', 'vlog'],
        children: [
          {
            title: 'Post preview card: Vertical',
            href: '/docs/blog-components#post-card-vertical',
          },
          {
            title: 'Post preview card: Horizontal',
            href: '/docs/blog-components#post-card-horizontal',
          },
          {
            title: 'Vlog card',
            href: '/docs/blog-components#post-vlog',
          },
          {
            title: 'Featured post: Variant 1',
            href: '/docs/blog-components#post-featured-1',
          },
          {
            title: 'Featured post: Variant 2',
            href: '/docs/blog-components#post-featured-2',
          },
          {
            title: 'Post navigation',
            href: '/docs/blog-components#post-navigation',
          },
          {
            title: 'Recipe card',
            href: '/docs/blog-components#post-recipe',
          },
        ],
      },
      {
        title: 'Breadcrumb',
        href: '/docs/breadcrumb',
        tags: ['navigation', 'links'],
      },
      {
        title: 'Buttons',
        href: '/docs/buttons',
        tags: ['navigation', 'links'],
        children: [
          {
            title: 'Solid',
            href: '/docs/buttons#buttons-solid',
          },
          {
            title: 'Outline',
            href: '/docs/buttons#buttons-outline',
          },
          {
            title: 'Static icons',
            href: '/docs/buttons#buttons-static-icons',
          },
          {
            title: 'Animated icons',
            href: '/docs/buttons#buttons-animated-icons',
          },
          {
            title: 'Market buttons',
            href: '/docs/buttons#buttons-market',
          },
          {
            title: 'Button tags',
            href: '/docs/buttons#buttons-tags',
          },
          {
            title: 'Shapes',
            href: '/docs/buttons#buttons-shapes',
          },
          {
            title: 'Sizes',
            href: '/docs/buttons#buttons-sizes',
          },
          {
            title: 'States',
            href: '/docs/buttons#buttons-states',
          },
        ],
      },
      {
        title: 'Button group',
        href: '/docs/button-group',
        tags: ['navigation', 'links'],
        children: [
          {
            title: 'Basic example',
            href: '/docs/button-group#btn-group-basic',
          },
          {
            title: 'Checkboxes and radio buttons',
            href: '/docs/button-group#btn-group-checkboxes',
          },
          {
            title: 'Button toolbar',
            href: '/docs/button-group#btn-group-toolbar',
          },
          {
            title: 'Nested dropdown',
            href: '/docs/button-group#btn-group-dropdown',
          },
          {
            title: 'Sizing',
            href: '/docs/button-group#btn-group-sizing',
          },
          {
            title: 'Vertical',
            href: '/docs/button-group#btn-group-vertical',
          },
        ],
      },
      {
        title: 'Card',
        href: '/docs/card',
        tags: ['box', 'container'],
        children: [
          {
            title: 'Basic example',
            href: '/docs/card#card-basic',
          },
          {
            title: 'Alternative card style',
            href: '/docs/card#card-alt-style',
          },
          {
            title: 'Image caps',
            href: '/docs/card#card-image-caps',
          },
          {
            title: 'Image hover effects',
            href: '/docs/card#card-image-hover',
          },
          {
            title: 'Horizontal layout',
            href: '/docs/card#card-horizontal',
          },
          {
            title: 'Header and footer',
            href: '/docs/card#card-header-footer',
          },
          {
            title: 'Text alignment',
            href: '/docs/card#card-text-alignment',
          },
          {
            title: 'Navigation: Tabs',
            href: '/docs/card#card-nav-tabs',
          },
          {
            title: 'Navigation: Pills',
            href: '/docs/card#card-nav-pills',
          },
          {
            title: 'List group inside card',
            href: '/docs/card#card-list-group',
          },
          {
            title: 'Card styles: Solid background',
            href: '/docs/card#card-bg-solid',
          },
          {
            title: 'Card styles: Subtle background',
            href: '/docs/card#card-bg-subtle',
          },
          {
            title: 'Card styles: Border and text color',
            href: '/docs/card#card-border-color',
          },
          {
            title: 'Layout: Card group',
            href: '/docs/card#card-group',
          },
          {
            title: 'Layout: Card grid',
            href: '/docs/card#card-grid',
          },
        ],
      },
      {
        title: 'Carousel (slider)',
        href: '/docs/carousel',
        children: [
          {
            title: 'Navigation (Prev / next buttons)',
            href: '/docs/carousel#carousel-navigation',
          },
          {
            title: 'Pagination',
            href: '/docs/carousel#carousel-pagination',
          },
          {
            title: 'Multiple slides per view (Responsive)',
            href: '/docs/carousel#carousel-multiple-slides',
          },
          {
            title: 'Fade transition',
            href: '/docs/carousel#carousel-fade',
          },
          {
            title: 'Thumbnails',
            href: '/docs/carousel#carousel-thumbnails',
          },
          {
            title: 'Synchronized sliders',
            href: '/docs/carousel#carousel-sync',
          },
        ],
      },
      {
        title: 'Charts',
        href: '/docs/charts',
        children: [
          {
            title: 'Line chart',
            href: '/docs/charts#line-chart',
          },
          {
            title: 'Bar chart',
            href: '/docs/charts#bar-chart',
          },
          {
            title: 'Pie chart',
            href: '/docs/charts#pie-chart',
          },
          {
            title: 'Doughnut chart',
            href: '/docs/charts#doughnut-chart',
          },
          {
            title: 'Polar area chart',
            href: '/docs/charts#polar-chart',
          },
          {
            title: 'Radar chart',
            href: '/docs/charts#radar-chart',
          },
        ],
      },
      {
        title: 'Collapse',
        href: '/docs/collapse',
        children: [
          {
            title: 'Basic example',
            href: '/docs/collapse#collapse-basic',
          },
          {
            title: 'Horizontal',
            href: '/docs/collapse#collapse-horizontal',
          },
          {
            title: 'Multiple targets',
            href: '/docs/collapse#collapse-multiple',
          },
        ],
      },
      {
        title: 'Countdown',
        href: '/docs/countdown',
        tags: ['timer'],
        children: [
          {
            title: 'Basic example',
            href: '/docs/countdown#countdown-basic',
          },
          {
            title: 'Display no years',
            href: '/docs/countdown#countdown-no-years',
          },
          {
            title: 'Sizing',
            href: '/docs/countdown#countdown-sizing',
          },
          {
            title: 'Colors',
            href: '/docs/countdown#countdown-colors',
          },
          {
            title: 'Cards example',
            href: '/docs/countdown#countdown-cards',
          },
        ],
      },
      {
        title: 'Date / time picker',
        href: '/docs/date-time-picker',
        tags: ['calendar', 'form control', 'input', 'select'],
        children: [
          {
            title: 'Date picker',
            href: '/docs/date-time-picker#picker-date',
          },
          {
            title: 'Clearable input',
            href: '/docs/date-time-picker#picker-clearable',
          },
          {
            title: 'Date and time picker',
            href: '/docs/date-time-picker#picker-date-time',
          },
          {
            title: 'Min and max dates',
            href: '/docs/date-time-picker#picker-min-max-dates',
          },
          {
            title: 'Date range',
            href: '/docs/date-time-picker#picker-date-range',
          },
        ],
      },
      {
        title: 'Dropdowns',
        href: '/docs/dropdowns',
        tags: ['navigation', 'menu', 'submenu', 'overlay', 'links', 'dropend', 'dropstart', 'dropup'],
        children: [
          {
            title: 'Static examples',
            href: '/docs/dropdowns#dropdowns-static',
          },
          {
            title: 'Dark dropdowns',
            href: '/docs/dropdowns#dropdowns-dark',
          },
          {
            title: 'Forms inside dropdown',
            href: '/docs/dropdowns#dropdowns-forms',
          },
          {
            title: 'Directions',
            href: '/docs/dropdowns#dropdowns-directions',
          },
          {
            title: 'Show on hover / focus',
            href: '/docs/dropdowns#dropdowns-hover',
          },
          {
            title: 'Menu alignment',
            href: '/docs/dropdowns#dropdowns-alignment',
          },
          {
            title: 'Split button',
            href: '/docs/dropdowns#dropdowns-split-btn',
          },
        ],
      },
      {
        title: 'Forms',
        href: '/docs/forms',
        tags: [
          'input',
          'select',
          'textarea',
          'checkbox',
          'radio',
          'range',
          'slider',
          'picker',
          'floating label',
          'validation',
          'control',
          'file',
          'switch',
          'quantity',
        ],
        children: [
          {
            title: 'Supported input types',
            href: '/docs/forms#forms-types',
          },
          {
            title: 'Floating labels',
            href: '/docs/forms#forms-floating-labels',
          },
          {
            title: 'Custom select',
            href: '/docs/forms#forms-custom-select',
          },
          {
            title: 'Password visibility toggle',
            href: '/docs/forms#forms-password-toggle',
          },
          {
            title: 'Checkboxes',
            href: '/docs/forms#forms-checkboxes',
          },
          {
            title: 'Radio buttons',
            href: '/docs/forms#forms-radios',
          },
          {
            title: 'Switches',
            href: '/docs/forms#forms-switches',
          },
          {
            title: 'Button toggles (Color, size options)',
            href: '/docs/forms#forms-btns',
          },
          {
            title: 'Count input (+/-)',
            href: '/docs/forms#forms-count',
          },
          {
            title: 'Range slider',
            href: '/docs/forms#forms-range-slider',
          },
          {
            title: 'Shapes',
            href: '/docs/forms#forms-shapes',
          },
          {
            title: 'Sizes',
            href: '/docs/forms#forms-sizes',
          },
          {
            title: 'Readonly & disabled',
            href: '/docs/forms#forms-disabled',
          },
          {
            title: 'Inline form',
            href: '/docs/forms#forms-inline',
          },
          {
            title: 'Help text',
            href: '/docs/forms#forms-help-text',
          },
          {
            title: 'Validation: status text',
            href: '/docs/forms#forms-validation-text',
          },
          {
            title: 'Validation: status tooltips',
            href: '/docs/forms#forms-validation-tooltips',
          },
        ],
      },
      {
        title: 'Hotspots',
        href: '/docs/hotspots',
        tags: ['overlay', 'popover', 'tooltip', 'image', 'picture'],
      },
      {
        title: 'Image comparison slider',
        href: '/docs/image-comparison-slider',
        children: [
          {
            title: 'Horizontal',
            href: '/docs/image-comparison-slider#img-comparison-slider-horizontal',
          },
          {
            title: 'Vertical',
            href: '/docs/image-comparison-slider#img-comparison-slider-vertical',
          },
        ],
      },
      {
        title: 'Image zoom',
        href: '/docs/image-zoom',
        tags: ['hover', 'overlay', 'popover', 'picture'],
        children: [
          {
            title: 'External zoom pane',
            href: '/docs/image-zoom#img-zoom-external-pane',
          },
          {
            title: 'Inline zoom pane',
            href: '/docs/image-zoom#img-zoom-inline-pane',
          },
        ],
      },
      {
        title: 'Input group',
        href: '/docs/input-group',
        tags: ['form control', 'select', 'textarea', 'addon'],
        children: [
          {
            title: 'Addon position',
            href: '/docs/input-group#input-group-addon-position',
          },
          {
            title: 'Icon inside input',
            href: '/docs/input-group#input-group-icon',
          },
          {
            title: 'Multiple addons',
            href: '/docs/input-group#input-group-addon-multiple',
          },
          {
            title: 'Different addon / input types',
            href: '/docs/input-group#input-group-types',
          },
          {
            title: 'Multiple inputs',
            href: '/docs/input-group#input-group-multiple-inputs',
          },
          {
            title: 'Button addons',
            href: '/docs/input-group#input-group-addon-button',
          },
          {
            title: 'Shapes',
            href: '/docs/input-group#input-group-shapes',
          },
          {
            title: 'Sizes',
            href: '/docs/input-group#input-group-sizes',
          },
        ],
      },
      {
        title: 'Input text formatter',
        href: '/docs/input-formatter',
        tags: ['form control', 'mask'],
        children: [
          {
            title: 'Payment card number',
            href: '/docs/input-formatter#input-formatter-card',
          },
          {
            title: 'Phone number',
            href: '/docs/input-formatter#input-formatter-phone',
          },
          {
            title: 'Date',
            href: '/docs/input-formatter#input-formatter-date',
          },
          {
            title: 'Time',
            href: '/docs/input-formatter#input-formatter-time',
          },
          {
            title: 'Custom blocks',
            href: '/docs/input-formatter#input-formatter-custom',
          },
          {
            title: 'Prefix and uppercase',
            href: '/docs/input-formatter#input-formatter-prefix',
          },
        ],
      },
      {
        title: 'Lightbox (Gallery)',
        href: '/docs/lightbox',
        tags: ['popup', 'modal', 'overlay', 'image', 'picture', 'video', 'youtube', 'vimeo', 'iframe'],
        children: [
          {
            title: 'Media: Image',
            href: '/docs/lightbox#lightbox-image',
          },
          {
            title: 'Media: Video',
            href: '/docs/lightbox#lightbox-video',
          },
          {
            title: 'Media: Iframe (Google map)',
            href: '/docs/lightbox#lightbox-iframe',
          },
          {
            title: 'Zoom effect gallery',
            href: '/docs/lightbox#lightbox-zoom',
          },
          {
            title: 'Inside card',
            href: '/docs/lightbox#lightbox-card',
          },
        ],
      },
      {
        title: 'List group',
        href: '/docs/list-group',
        tags: ['navigation', 'links', 'menu', 'ordered', 'unordered'],
        children: [
          {
            title: 'Basic example',
            href: '/docs/list-group#list-group-basic',
          },
          {
            title: 'Borderless',
            href: '/docs/list-group#list-group-borderless',
          },
          {
            title: 'Links or buttons',
            href: '/docs/list-group#list-group-links',
          },
          {
            title: 'Flush',
            href: '/docs/list-group#list-group-flush',
          },
          {
            title: 'With icons and badges',
            href: '/docs/list-group#list-group-icons',
          },
          {
            title: 'Checkboxes and radios',
            href: '/docs/list-group#list-group-checkboxes',
          },
          {
            title: 'Numbered list group',
            href: '/docs/list-group#list-group-numbered',
          },
          {
            title: 'Horizontal list group',
            href: '/docs/list-group#list-group-horizontal',
          },
          {
            title: 'Custom content',
            href: '/docs/list-group#list-group-custom',
          },
          {
            title: 'Color variations',
            href: '/docs/list-group#list-group-colors',
          },
          {
            title: 'Tabbed interface',
            href: '/docs/list-group#list-group-tabs',
          },
        ],
      },
      {
        title: 'Modal',
        href: '/docs/modal',
        tags: ['dialog', 'popup', 'overlay', 'lightbox'],
        children: [
          {
            title: 'Modal markup',
            href: '/docs/modal#modal-markup',
          },
          {
            title: 'Tabs and forms',
            href: '/docs/modal#modal-tabs-forms',
          },
          {
            title: 'Live demo (variants)',
            href: '/docs/modal#modal-demo',
          },
        ],
      },
      {
        title: 'Nav links',
        href: '/docs/nav-links',
        tags: ['navigation', 'menu', 'links'],
        children: [
          {
            title: 'Basic example',
            href: '/docs/nav-links#nav-links-basic',
          },
          {
            title: 'Underline effect',
            href: '/docs/nav-links#nav-links-underline',
          },
          {
            title: 'Vertical alignment',
            href: '/docs/nav-links#nav-links-vertical',
          },
          {
            title: 'With icons and dropdowns',
            href: '/docs/nav-links#nav-links-icons',
          },
          {
            title: 'Sizing',
            href: '/docs/nav-links#nav-links-sizing',
          },
        ],
      },
      {
        title: 'Navbar',
        href: '/docs/navbar',
        tags: ['header', 'navigation', 'menu', 'submenu', 'links', 'brand', 'logo'],
        children: [
          {
            title: 'Supported content',
            href: '/docs/navbar#navbar-content',
          },
          {
            title: 'Color schemes',
            href: '/docs/navbar#navbar-colors',
          },
          {
            title: 'Responsive offcanvas menu',
            href: '/docs/navbar#navbar-offcanvas',
          },
        ],
      },
      {
        title: 'Offcanvas',
        href: '/docs/offcanvas',
        tags: ['drawer', 'overlay', 'sidebar'],
        children: [
          {
            title: 'Offcanvas components',
            href: '/docs/offcanvas#offcanvas-components',
          },
          {
            title: 'Placement',
            href: '/docs/offcanvas#offcanvas-placement',
          },
          {
            title: 'Backdrop and scrolling',
            href: '/docs/offcanvas#offcanvas-backdrop',
          },
          {
            title: 'Mobile menu (responsive)',
            href: '/docs/offcanvas#offcanvas-mobile-menu',
          },
        ],
      },
      {
        title: 'Pagination',
        href: '/docs/pagination',
        tags: ['pager', 'navigation', 'links', 'pages'],
        children: [
          {
            title: 'Basic example',
            href: '/docs/pagination#pagination-basic',
          },
          {
            title: 'Next.js link example',
            href: '/docs/pagination#pagination-next-link',
          },
          {
            title: 'With icons',
            href: '/docs/pagination#pagination-icons',
          },
          {
            title: 'Sizing',
            href: '/docs/pagination#pagination-sizing',
          },
          {
            title: 'Items per page select',
            href: '/docs/pagination#pagination-select',
          },
          {
            title: 'Load more (One-page)',
            href: '/docs/pagination#pagination-load-more',
          },
        ],
      },
      {
        title: 'Pills',
        href: '/docs/pills',
        tags: ['navigation', 'links', 'tabs'],
        children: [
          {
            title: 'Basic example',
            href: '/docs/pills#pills-basic',
          },
          {
            title: 'Next.js link example',
            href: '/docs/pills#pills-next-link',
          },
          {
            title: 'Rounded pills',
            href: '/docs/pills#pills-rounded',
          },
          {
            title: 'Fill and justify',
            href: '/docs/pills#pills-fill-justify',
          },
          {
            title: 'Pills with dropdowns',
            href: '/docs/pills#pills-dropdowns',
          },
          {
            title: 'Vertical pills',
            href: '/docs/pills#pills-vertical',
          },
          {
            title: 'Tabs-like behavior',
            href: '/docs/pills#pills-tabs',
          },
        ],
      },
      {
        title: 'Placeholders',
        href: '/docs/placeholders',
        tags: ['loading', 'loader'],
        children: [
          {
            title: 'Width',
            href: '/docs/placeholders#placeholders-width',
          },
          {
            title: 'Color',
            href: '/docs/placeholders#placeholders-color',
          },
          {
            title: 'Sizing',
            href: '/docs/placeholders#placeholders-sizing',
          },
          {
            title: 'Animation',
            href: '/docs/placeholders#placeholders-animation',
          },
          {
            title: 'Loading card example',
            href: '/docs/placeholders#placeholders-loading-card',
          },
        ],
      },
      {
        title: 'Popovers',
        href: '/docs/popovers',
        tags: ['tooltip', 'overlay', 'popup'],
        children: [
          {
            title: 'Static examples',
            href: '/docs/popovers#popovers-static',
          },
          {
            title: 'Live demo',
            href: '/docs/popovers#popovers-live',
          },
          {
            title: 'Toggle options',
            href: '/docs/popovers#popovers-toggle',
          },
        ],
      },
      {
        title: 'Product cards',
        href: '/docs/product-cards',
        tags: ['shop', 'store', 'sell', 'item', 'cart'],
        children: [
          {
            title: 'Electronics product card',
            href: '/docs/product-cards#product-card-electronics',
          },
          {
            title: 'Electronics product list',
            href: '/docs/product-cards#product-list-electronics',
          },
          {
            title: 'Fashion product card',
            href: '/docs/product-cards#product-card-fashion',
          },
          {
            title: 'Furniture product card',
            href: '/docs/product-cards#product-card-furniture',
          },
          {
            title: 'Grocery product card',
            href: '/docs/product-cards#product-card-grocery',
          },
          {
            title: 'Marketplace product card',
            href: '/docs/product-cards#product-card-marketplace',
          },
          {
            title: 'Cart items list',
            href: '/docs/product-cards#cart-items',
          },
        ],
      },
      {
        title: 'Progress',
        href: '/docs/progress',
        tags: ['bars', 'status'],
        children: [
          {
            title: 'Color variations (thick)',
            href: '/docs/progress#progress-colors-thick',
          },
          {
            title: 'Color variations (thin)',
            href: '/docs/progress#progress-colors-thin',
          },
          {
            title: 'Multiple bars',
            href: '/docs/progress#progress-multiple',
          },
          {
            title: 'Animated striped bars',
            href: '/docs/progress#progress-striped',
          },
          {
            title: 'Use case: Rating breakdown',
            href: '/docs/progress#progress-rating-breakdown',
          },
        ],
      },
      {
        title: 'Reviews / comments',
        href: '/docs/reviews',
        tags: ['testimonials', 'feedback', 'stars', 'rating'],
        children: [
          {
            title: 'Product review: Variant 1',
            href: '/docs/reviews#review-product-1',
          },
          {
            title: 'Product review: Variant 2',
            href: '/docs/reviews#review-product-2',
          },
          {
            title: 'Inside card: Variant 1',
            href: '/docs/reviews#review-card-1',
          },
          {
            title: 'Inside card: Variant 2',
            href: '/docs/reviews#review-card-2',
          },
          {
            title: 'Comment',
            href: '/docs/reviews#comment',
          },
          {
            title: 'Rating breakdown',
            href: '/docs/reviews#review-rating-breakdown',
          },
        ],
      },
      {
        title: 'Scrollbar',
        href: '/docs/scrollbar',
        children: [
          {
            title: 'Vertical',
            href: '/docs/scrollbar#scrollbar-vertical',
          },
          {
            title: 'Horizontal',
            href: '/docs/scrollbar#scrollbar-horizontal',
          },
          {
            title: 'Autohide',
            href: '/docs/scrollbar#scrollbar-autohide',
          },
        ],
      },
      {
        title: 'Scrollspy',
        href: '/docs/scrollspy',
        tags: ['anchor', 'links', 'navigation', 'menu'],
        children: [
          {
            title: 'Navbar',
            href: '/docs/scrollspy#scrollspy-navbar',
          },
          {
            title: 'List group with nested nav',
            href: '/docs/scrollspy#scrollspy-nested',
          },
          {
            title: 'Tabs',
            href: '/docs/scrollspy#scrollspy-tabs',
          },
          {
            title: 'Pills',
            href: '/docs/scrollspy#scrollspy-pills',
          },
        ],
      },
      {
        title: 'Select box',
        href: '/docs/select-box',
        tags: ['tags', 'choices', 'input', 'form', 'multiple', 'control'],
        children: [
          {
            title: 'Basic select',
            href: '/docs/select-box#select-basic',
          },
          {
            title: 'Search and option groups',
            href: '/docs/select-box#select-search',
          },
          {
            title: 'Multiple select',
            href: '/docs/select-box#select-multiple',
          },
          {
            title: 'Tags input',
            href: '/docs/select-box#select-tags-input',
          },
          {
            title: 'Custom option template',
            href: '/docs/select-box#select-custom-template',
          },
          {
            title: 'Sizes and shapes',
            href: '/docs/select-box#select-sizes-shapes',
          },
        ],
      },
      {
        title: 'Shop categories',
        href: '/docs/shop-categories',
        tags: ['store', 'filter', 'links', 'navigation', 'cards'],
        children: [
          {
            title: 'Category card: Variant 1',
            href: '/docs/shop-categories#category-card-1',
          },
          {
            title: 'Category card: Variant 2',
            href: '/docs/shop-categories#category-card-2',
          },
          {
            title: 'Category card: Variant 3',
            href: '/docs/shop-categories#category-card-3',
          },
          {
            title: 'Category card: Variant 4',
            href: '/docs/shop-categories#category-card-4',
          },
          {
            title: 'Category card: Variant 5',
            href: '/docs/shop-categories#category-card-5',
          },
          {
            title: 'Category card: Variant 6',
            href: '/docs/shop-categories#category-card-6',
          },
          {
            title: 'Categories list',
            href: '/docs/shop-categories#categories-list',
          },
        ],
      },
      {
        title: 'Shop filters',
        href: '/docs/shop-filters',
        tags: ['store', 'sidebar', 'widgets', 'sort'],
        children: [
          {
            title: 'Checkboxes',
            href: '/docs/shop-filters#filter-checkboxes',
          },
          {
            title: 'Button toggles',
            href: '/docs/shop-filters#filter-button-toggles',
          },
          {
            title: 'Links',
            href: '/docs/shop-filters#filter-links',
          },
          {
            title: 'Range slider',
            href: '/docs/shop-filters#filter-range-slider',
          },
          {
            title: 'Selected filters',
            href: '/docs/shop-filters#filter-selected',
          },
        ],
      },
      {
        title: 'Spinners',
        href: '/docs/spinners',
        tags: ['loading', 'loader'],
        children: [
          {
            title: 'Border spinner',
            href: '/docs/spinners#spinners-border',
          },
          {
            title: 'Growing spinner',
            href: '/docs/spinners#spinners-growing',
          },
          {
            title: 'Sizing',
            href: '/docs/spinners#spinners-sizing',
          },
          {
            title: 'Inside button',
            href: '/docs/spinners#spinners-button',
          },
        ],
      },
      {
        title: 'Tabs',
        href: '/docs/tabs',
        tags: ['navigation', 'links', 'underline'],
        children: [
          {
            title: 'Button-like style',
            href: '/docs/tabs#tabs-button',
          },
          {
            title: 'Underline style',
            href: '/docs/tabs#tabs-underline',
          },
          {
            title: 'Vertical alignment',
            href: '/docs/tabs#tabs-vertical',
          },
          {
            title: 'With icons',
            href: '/docs/tabs#tabs-icons',
          },
          {
            title: 'Shapes',
            href: '/docs/tabs#tabs-shapes',
          },
        ],
      },
      {
        title: 'Toasts',
        href: '/docs/toasts',
        tags: ['notification', 'overlay', 'popup', 'alert', 'feedback'],
        children: [
          {
            title: 'Tiny variant',
            href: '/docs/toasts#toasts-tiny',
          },
          {
            title: 'Tiny with icon',
            href: '/docs/toasts#toasts-tiny-icon',
          },
          {
            title: 'With header and icon',
            href: '/docs/toasts#toasts-header-icon',
          },
          {
            title: 'Action buttons',
            href: '/docs/toasts#toasts-buttons',
          },
          {
            title: 'Placement',
            href: '/docs/toasts#toasts-placement',
          },
          {
            title: 'Live demo',
            href: '/docs/toasts#toasts-live',
          },
        ],
      },
      {
        title: 'Tooltips',
        href: '/docs/tooltips',
        tags: ['overlay', 'popup', 'popover'],
        children: [
          {
            title: 'Static examples',
            href: '/docs/tooltips#tooltips-static',
          },
          {
            title: 'Live demo',
            href: '/docs/tooltips#tooltips-live',
          },
          {
            title: 'Small size',
            href: '/docs/tooltips#tooltips-small',
          },
        ],
      },
    ],
  },
  {
    title: 'Utilities & helpers',
    icon: 'ci-tool fs-lg text-warning me-2',
    children: [
      {
        title: 'Cartzilla utilities',
        href: '/docs/utilities',
        tags: ['border', 'background', 'cursor'],
        children: [
          {
            title: 'Dotted background',
            href: '/docs/utilities#utilities-dotted-bg',
          },
          {
            title: 'Borders',
            href: '/docs/utilities#utilities-borders',
          },
          {
            title: 'Cursors',
            href: '/docs/utilities#utilities-cursors',
          },
        ],
      },
      {
        title: 'Bootstrap utilities',
        href: 'https://getbootstrap.com/docs/5.3/utilities/background/',
        tags: [
          'border',
          'background',
          'color',
          'text',
          'font',
          'size',
          'position',
          'weight',
          'display',
          'opacity',
          'flex',
          'space',
          'spacing',
          'align',
          'visibility',
          'overflow',
          'object',
          'float',
          'shadow',
        ],
        target: '_blank',
        rel: 'noreferrer',
      },
      {
        title: 'Bootstrap helpers',
        href: 'https://getbootstrap.com/docs/5.3/helpers/clearfix/',
        tags: ['position', 'ratio', 'stacks', 'stretched link', 'focus', 'truncation', 'rule'],
        target: '_blank',
        rel: 'noreferrer',
      },
    ],
  },
]

export default navigation
