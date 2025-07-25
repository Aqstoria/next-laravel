const mix = require('laravel-mix')
const path = require('path')

const directory = path.basename(path.resolve(__dirname))
const source = `platform/plugins/${directory}`
const dist = `public/vendor/core/plugins/${directory}`

mix
    .js(`${source}/resources/js/discount.js`, `${dist}/js`)
    .js(`${source}/resources/js/order-create.js`, `${dist}/js`)
    .js(`${source}/resources/js/front/checkout.js`, `${dist}/js`)
    .js(`${source}/resources/js/admin-review.js`, `${dist}/js`)
    .js(`${source}/resources/js/front/order-return.js`, `${dist}/js`)
    .js(`${source}/resources/js/front-review.js`, `${dist}/js`)

if (mix.inProduction()) {
    mix
        .copy(`${dist}/js/discount.js`, `${source}/public/js`)
        .copy(`${dist}/js/order-create.js`, `${source}/public/js`)
        .copy(`${dist}/js/checkout.js`, `${source}/public/js`)
        .copy(`${dist}/js/admin-review.js`, `${source}/public/js`)
        .copy(`${dist}/js/order-return.js`, `${source}/public/js`)
        .copy(`${dist}/js/front-review.js`, `${source}/public/js`)
}

const scripts = [
    'edit-product.js',
    'edit-product-collection.js',
    'global-option.js',
    'product-option.js',
    'product-bulk-editable-table.js',
    'ecommerce-product-attributes.js',
    'change-product-swatches.js',
    'change-product-options.js',
    'currencies.js',
    'review.js',
    'shipping.js',
    'utilities.js',
    'payment-method.js',
    'customer.js',
    'setting.js',
    'order.js',
    'order-incomplete.js',
    'shipment.js',
    'store-locator.js',
    'report.js',
    'dashboard-widgets.js',
    'avatar.js',
    'flash-sale.js',
    'bulk-import.js',
    'export.js',
    'address.js',
    'tax.js',
    'invoice.js',
    'front-ecommerce.js',
];

scripts.forEach(item => {
    mix.js(`${source}/resources/js/${item}`, `${dist}/js`)
});

if (mix.inProduction()) {
    scripts.forEach(item => {
        mix.copy(`${dist}/js/${item}`, `${source}/public/js`)
    });
}

const styles = [
    'ecommerce.scss',
    'ecommerce-product-attributes.scss',
    'currencies.scss',
    'review.scss',
    'customer.scss',
    'report.scss',
    'order-return.scss',
    'widget.scss',
    'front-auth.scss',
    'front-ecommerce.scss',
    'front-ecommerce-missing-bootstrap.scss',
    'front-ecommerce-rtl.scss',
    'front-faq.scss',
    'front-review.scss',
    'front-theme.scss',
    'front-theme-rtl.scss',
]

styles.forEach(item => {
    mix.sass(`${source}/resources/sass/${item}`, `${dist}/css`)
})

if (mix.inProduction()) {
    styles.forEach(item => {
        mix.copy(`${dist}/css/${item.replace('.scss', '.css')}`, `${source}/public/css`)
    })
}
