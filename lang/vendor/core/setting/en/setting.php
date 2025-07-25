<?php

return [
    'title' => 'Settings',
    'general_setting' => 'General Settings',
    'menu' => 'All Settings',
    'email_setting_title' => 'Email settings',
    'email_setting_description' => 'Configure email settings',
    'general' => [
        'theme' => 'Theme',
        'title' => 'General Information',
        'description' => 'View and update site information',
        'rich_editor' => 'Rich Editor',
        'site_title' => 'Site title',
        'admin_email' => 'Admin Email',
        'seo_block' => 'SEO Configuration',
        'seo_title' => 'SEO Title',
        'seo_description' => 'SEO Description',
        'webmaster_tools_block' => 'Google Webmaster Tools',
        'placeholder' => [
            'site_title' => 'Site Title (maximum 120 characters)',
            'admin_email' => 'Admin Email',
            'seo_title' => 'SEO Title (maximum 120 characters)',
            'seo_description' => 'SEO Description (maximum 120 characters)',
            'google_analytics' => 'Google Analytics',
        ],
        'enable_send_error_reporting_via_email' => 'Send error reporting via email',
        'time_zone' => 'Timezone',
        'enable' => 'Enable',
        'disable' => 'Disable',
        'disabled_helper' => 'Cannot disable this email template!',
        'enable_cache_site_map' => 'Enable sitemap caching',
        'cache_time_site_map' => 'Sitemap cache timeout (in minutes)',
        'admin_logo' => 'Admin logo',
        'admin_favicon' => 'Admin favicon',
        'admin_title' => 'Admin title',
        'admin_title_placeholder' => 'Title to show in browser tab',
        'admin_appearance_title' => 'Admin appearance',
        'admin_appearance_description' => 'Setting admin appearance such as editor, language...',
        'seo_block_description' => 'Setting site title, site meta description, site keyword for optimize SEO',
        'webmaster_tools_description' => 'Google Search Console is a free web tool provided by Google that helps website owners monitor their site\'s performance in Google Search results.',
        'yes' => 'Yes',
        'no' => 'No',
        'show_on_front' => 'Your homepage displays',
        'select' => '— Select —',
        'show_site_name' => 'Show site name after page title, separated with "-"',
        'locale' => 'Site language',
        'locale_direction' => 'Front site language direction',
        'minutes' => 'minutes',
        'redirect_404_to_homepage' => 'Redirect all Not Found requests to homepage',
    ],
    'admin_appearance' => [
        'title' => 'Admin appearance',
        'description' => 'View and update logo, favicon, layout,...',
        'layout' => 'Layout',
        'horizontal' => 'Horizontal',
        'vertical' => 'Vertical',
        'show_menu_item_icon' => 'Show menu item icon',
        'language' => 'Admin panel language',
        'theme_mode' => 'Theme mode',
        'dark' => 'Dark',
        'light' => 'Light',
        'container_width' => [
            'title' => 'Container width',
            'default' => 'Default',
            'large' => 'Large',
            'full' => 'Full',
        ],
        'form' => [
            'admin_logo' => 'Admin logo',
            'admin_logo_max_height' => 'Logo height (px)',
            'admin_logo_max_height_helper' => 'Set the height of the logo in pixels. The default value is :default.',
            'admin_favicon' => 'Admin favicon',
            'admin_favicon_type' => 'Admin favicon type',
            'admin_title' => 'Admin title',
            'admin_title_placeholder' => 'Title to show in browser tab',
            'admin_login_screen_backgrounds' => 'Login screen backgrounds (~1366 x 768)',
            'admin_locale' => 'Admin language',
            'admin_locale_direction' => 'Admin language direction',
            'rich_editor' => 'Rich Editor',
            'show_admin_bar' => 'Show admin bar for logged-in admins, even in the front site',
            'show_guidelines' => 'Show guidelines',
            'primary_font' => 'Primary font',
            'primary_color' => 'Primary color',
            'secondary_color' => 'Secondary color',
            'heading_color' => 'Heading color',
            'text_color' => 'Text color',
            'link_color' => 'Link color',
            'link_hover_color' => 'Link hover color',
            'show_menu_item_icon' => 'Show menu item icon',
            'custom_css' => 'Custom CSS',
            'custom_js' => 'Custom JS',
            'custom_header_js' => 'Header JS',
            'custom_header_js_placeholder' => 'JavaScript in the page header, wrap it inside &#x3C;script&#x3E;&#x3C;/script&#x3E;',
            'custom_body_js' => 'Body JS',
            'custom_body_js_placeholder' => 'JavaScript in the page body, wrap it inside &#x3C;script&#x3E;&#x3C;/script&#x3E;',
            'custom_footer_js' => 'Footer JS',
            'custom_footer_js_placeholder' => 'JavaScript in the page footer, wrap it inside &#x3C;script&#x3E;&#x3C;/script&#x3E;',
        ],
    ],
    'datatable' => [
        'title' => 'Datatables',
        'description' => 'Settings for datatables',
        'form' => [
            'show_column_visibility' => 'Show column visibility by default',
            'show_export_button' => 'Show export button by default',
            'pagination_type' => 'Pagination type',
            'default' => 'Default',
            'dropdown' => 'Dropdown',
            'enable_responsive' => 'Enable table responsive',
        ],
    ],
    'email' => [
        'subject' => 'Subject',
        'content' => 'Content',
        'title' => 'Setting for email template',
        'description' => 'Email template using HTML & system variables.',
        'reset_to_default' => 'Reset to default',
        'back' => 'Back to settings',
        'reset_success' => 'Reset back to default successfully',
        'confirm_reset' => 'Confirm to reset email template?',
        'confirm_message' => 'Do you really want to reset this email template back to default?',
        'continue' => 'Continue',
        'sender_name' => 'Sender name',
        'sender_name_placeholder' => 'Name',
        'sender_name_helper' => 'The name that will appear in the From field of emails sent by the system',
        'sender_email' => 'Sender email',
        'sender_email_placeholder' => 'Email address (e.g. :default)',
        'sender_email_helper' => 'The email address that will be used as the sender for all emails sent by the system',
        'mailer' => 'Mailer',
        'port' => 'Port',
        'port_placeholder' => 'Ex: 587',
        'port_helper' => 'The port used by your mail server (common ports: 25, 465, 587)',
        'host' => 'Host',
        'host_placeholder' => 'Ex: smtp.gmail.com',
        'host_helper' => 'SMTP host address',
        'username' => 'Username',
        'username_placeholder' => 'Username to login to mail server',
        'username_helper' => 'Your mail server login username',
        'password' => 'Password',
        'password_placeholder' => 'Password to login to mail server',
        'password_helper' => 'Your mail server login password',
        'mail_gun_domain' => 'Domain',
        'mail_gun_domain_placeholder' => 'Ex: mg.yourdomain.com',
        'mail_gun_domain_helper' => 'The domain name you registered with Mailgun',
        'mail_gun_secret' => 'Secret',
        'mail_gun_secret_placeholder' => 'Ex: key-0123456789abcdef0123456789abcdef',
        'mail_gun_secret_helper' => 'Your Mailgun API key',
        'mail_gun_endpoint' => 'Endpoint',
        'mail_gun_endpoint_placeholder' => 'Ex: api.mailgun.net',
        'mail_gun_endpoint_helper' => 'Mailgun API endpoint (api.mailgun.net for US, api.eu.mailgun.net for EU)',
        'log_channel' => 'Log channel',
        'log_channel_helper' => 'Select which logging channel to use for email logs',
        'sendmail_path' => 'Sendmail Path',
        'local_domain' => 'Local domain',
        'local_domain_placeholder' => 'It can be empty. Needs to set to your domain when using SMTP Relay. E.g. your-domain.com',
        'local_domain_helper' => 'The domain that will be used to identify the server when communicating with remote SMTP servers',

        'ses_key' => 'Key',
        'ses_key_placeholder' => 'Ex: AKIAIOSFODNN7EXAMPLE',
        'ses_key_helper' => 'Your AWS access key ID',
        'ses_secret' => 'Secret',
        'ses_secret_placeholder' => 'Ex: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
        'ses_secret_helper' => 'Your AWS secret access key',
        'ses_region' => 'Region',
        'ses_region_placeholder' => 'Ex: us-east-1',
        'ses_region_helper' => 'The AWS region where your SES service is configured',

        'postmark_token' => 'Token',
        'postmark_token_placeholder' => 'Ex: 9a734df7-1c85-4b35-a98a-3d24cac1db1e',
        'postmark_token_helper' => 'Your Postmark server token',

        'resend_key' => 'API Key',
        'resend_key_placeholder' => 'Ex: re_123456789012345678901234567890',
        'resend_key_helper' => 'Your Resend API key',

        'email_templates' => 'Email templates',
        'email_templates_description' => 'Email templates using HTML & system variables.',
        'email_template_settings' => 'Email Template Settings',
        'email_template_settings_description' => 'View and update your email templates settings',
        'email_rules' => 'Email rules',
        'email_rules_description' => 'Configure email rules for validation',
        'base_template' => 'Base template',
        'base_template_description' => 'Base template for all emails',
        'template_header' => 'Email template header',
        'template_header_description' => 'Template for header of emails',
        'template_footer' => 'Email template footer',
        'template_footer_description' => 'Template for footer of emails',
        'default' => 'Default',
        'template_off_status_helper' => 'This email template is turned off.',
        'blacklist_email_domains' => 'Blacklisted Email Domains',
        'blacklist_email_domains_helper' => 'Enter a list of email domains to be blacklisted. E.g. gmail.com, yahoo.com.',
        'blacklist_specified_emails' => 'Blacklisted Email Addresses',
        'blacklist_specified_emails_helper' => 'Enter a list of specific email addresses to be blacklisted. E.g. mail@example.com.',
        'exception_emails' => 'Exception Emails',
        'exception_emails_helper' => 'These emails will be excluded from the validation rules.',
        'email_rules_strict' => 'Strict Email Validation',
        'email_rules_strict_helper' => 'Perform RFC-like email validation with strict rules.',
        'email_rules_dns' => 'DNS Check Validation',
        'email_rules_dns_helper' => 'Check if there are DNS records indicating the server accepts emails.',
        'email_rules_spoof' => 'Spoofing Detection',
        'email_rules_spoof_helper' => 'Detect potential email spoofing attempts.',
        'template_turn_off' => 'Click to turn off this email template',
        'template_turn_on' => 'Click to turn on this email template',
        'turn_on_success_message' => 'Turn on email template successfully!',
        'turn_off_success_message' => 'Turn off email template successfully!',
        'email_template_status' => 'Email template status',
        'email_template_status_description' => 'Turn on/off email template',
        'email_template_logo' => 'Logo',
        'email_template_logo_helper_text' => 'If don\'t set, it will get from admin logo in Admin -> Settings -> Admin Appearance -> Logo.',
        'email_template_copyright_text_helper_text' => 'If don\'t set, it will get from theme options copyright in Admin -> Appearance -> Theme Options -> General -> Copyright.',
        'email_template_email_contact' => 'Contact email address',
        'email_template_email_contact_helper_text' => 'If don\'t set, it will get from sender email in Admin -> Settings -> Email',
        'email_template_social_links' => 'Social Links',
        'email_template_copyright_text' => 'Copyright',
        'image_upload_supported' => 'Supports only PNG, JPG, JPEG, and GIF formats.',
        'email_template_custom_css' => 'Email template custom CSS',
        'social_links' => [
            'name' => 'Name',
            'icon' => 'Icon',
            'icon_image' => 'Icon Image (Supports only PNG, JPG, JPEG, and GIF formats.)',
            'url' => 'URL',
            'image' => 'Image',
        ],
    ],
    'media' => [
        'title' => 'Media',
        'driver' => 'Driver',
        'description' => 'Settings for media',
        'local_disk' => 'Local disk',
        'aws_access_key_id' => 'AWS Access Key ID',
        'aws_secret_key' => 'AWS Secret Key',
        'aws_default_region' => 'AWS Default Region',
        'aws_bucket' => 'AWS Bucket',
        'aws_url' => 'AWS URL',
        'aws_endpoint' => 'AWS Endpoint (Optional)',
        'use_path_style_endpoint' => 'Use path style endpoint',
        'r2_access_key_id' => 'R2 Access Key ID',
        'r2_secret_key' => 'R2 Secret Key',
        'r2_bucket' => 'R2 Bucket',
        'r2_url' => 'R2 URL',
        'r2_endpoint' => 'R2 Endpoint',
        'do_spaces_access_key_id' => 'DO Spaces Access Key ID',
        'do_spaces_secret_key' => 'DO Spaces Secret Key',
        'do_spaces_default_region' => 'DO Spaces Default Region',
        'do_spaces_bucket' => 'DO Spaces Bucket',
        'do_spaces_endpoint' => 'DO Spaces Endpoint',
        'do_spaces_cdn_enabled' => 'Is DO Spaces CDN enabled?',
        'media_do_spaces_cdn_custom_domain' => 'Do Spaces CDN custom domain',
        'media_do_spaces_cdn_custom_domain_placeholder' => 'https://your-custom-domain.com',
        'wasabi_access_key_id' => 'Wasabi Access Key ID',
        'wasabi_secret_key' => 'Wasabi Secret Key',
        'wasabi_default_region' => 'Wasabi Default Region',
        'wasabi_bucket' => 'Wasabi Bucket',
        'wasabi_root' => 'Wasabi Root',
        'wasabi_root_helper' => 'To reuse existing images, simply designate the Wasabi root as "/", then upload all current files from public/storage to your Wasabi root directory.',
        'backblaze_access_key_id' => 'Backblaze Access Key ID',
        'backblaze_secret_key' => 'Backblaze Secret Key',
        'backblaze_bucket' => 'Backblaze Bucket',
        'backblaze_default_region' => 'Backblaze Default Region',
        'backblaze_url' => 'Backblaze URL',
        'backblaze_endpoint' => 'Backblaze Endpoint',
        'backblaze_cdn_enabled' => 'Is Backblaze CDN enabled?',
        'media_backblaze_cdn_custom_domain' => 'Backblaze CDN custom domain',
        'media_backblaze_cdn_custom_domain_placeholder' => 'https://your-custom-domain.com',
        'default_placeholder_image' => 'Default placeholder image',
        'enable_chunk' => 'Enable the chunk upload',
        'chunk_size' => 'Chunk size (Bytes)',
        'chunk_size_placeholder' => 'Default: 1048576 ~ 1MB',
        'max_file_size' => 'Chunk max file size (MB)',
        'max_file_size_placeholder' => 'Default: 1048576 ~ 1GB',
        'enable_watermark' => 'Enable watermark',
        'watermark_source' => 'Watermark image',
        'watermark_source_helper' => 'Supports only PNG, JPG, and JPEG formats. You should use image less than 200x200px and size smaller than 50KB.',
        'watermark_size' => 'Size of watermark (%)',
        'watermark_size_placeholder' => 'Default: 10 (%)',
        'watermark_opacity' => 'Watermark Opacity (%)',
        'watermark_opacity_placeholder' => 'Default: 70 (%)',
        'watermark_position' => 'Watermark position',
        'watermark_position_x' => 'Watermark position X',
        'watermark_position_y' => 'Watermark position Y',
        'watermark_position_top_left' => 'Top left',
        'watermark_position_top_right' => 'Top right',
        'watermark_position_bottom_left' => 'Bottom left',
        'watermark_position_bottom_right' => 'Bottom right',
        'watermark_position_center' => 'Center',
        'turn_off_automatic_url_translation_into_latin' => 'Turn off automatic URL translation into Latin',
        'bunnycdn_hostname' => 'Hostname',
        'bunnycdn_zone' => 'Zone Name (The name of your storage zone)',
        'bunnycdn_key' => 'FTP & API Access Password (The storage zone API Access Password)',
        'bunnycdn_region' => 'Region (The storage zone region)',
        'optional' => 'Optional',
        'sizes' => 'Media thumbnails sizes',
        'media_sizes_helper' => 'Set width or height to 0 if you just want to crop by width or height.',
        'width' => 'Width',
        'height' => 'Height',
        'default_size_value' => 'Default: :size',
        'all' => 'All',
        'all_helper_text' => 'If you uncheck all folders, it will apply for all folders.',
        'media_folders_can_add_watermark' => 'Add watermark for images in folders:',
        'max_upload_filesize' => 'Max upload filesize (MB)',
        'max_upload_filesize_placeholder' => 'Default: :size, must less than :size.',
        'max_upload_filesize_helper' => 'Your server allows to upload files maximum :size, you can change this value to limit upload filesize.',
        'image_processing_library' => 'Image processing library',
        'use_original_name_for_file_path' => 'Use original name for file path',
        'keep_original_file_size_and_quality' => 'Keep original file size and quality',
        'update_thumbnail_sizes_warning' => 'After adjusting the thumbnail sizes, you must click on the ":button_text" button to refresh them.',
        'thumbnail_crop_position' => 'Thumbnail crop position',
        'thumbnail_crop_position_left' => 'Left',
        'thumbnail_crop_position_center' => 'Center',
        'thumbnail_crop_position_right' => 'Right',
        'thumbnail_crop_position_top' => 'Top',
        'thumbnail_crop_position_bottom' => 'Bottom',
        'thumbnail_crop_position_helper' => 'This setting is used to crop the image when generating thumbnails. It will be cropped from this position until the image is filled.',
        'user_can_only_view_own_media' => 'Users can only view their own media',
        'user_can_only_view_own_media_helper' => 'When enabled, users can only view their own media, while super admins can view all media.',
        'enable_thumbnail_sizes' => 'Enable thumbnail sizes',
        'enable_thumbnail_sizes_helper' => 'Enable this option to generate thumbnails for images. If it is disabled, the system will not generate thumbnails for images and always use full size image.',
        'convert_image_to_webp' => 'Convert JPG, JPEG, PNG image to WebP',
        'convert_image_to_webp_helper' => 'WebP is a modern image format that provides superior lossless and lossy compression for images on the web. It is supported in Chrome, Firefox, Edge, and Opera. Image will be converted to WebP format when uploading. It is just applied for JPG, JPEG, PNG images.',
        'reduce_large_image_size' => 'Reduce large image size when uploading',
        'reduce_large_image_size_helper' => 'When enabled, the system will reduce the size of large images when uploading, applied for JPG, JPEG, PNG, WebP image. The maximum width and height of the image will be resized to the values you set below.',
        'image_max_width' => 'Image max width (px)',
        'image_max_height' => 'Image max height (px)',
        'image_max_width_placeholder' => 'Leave blank to keep original width',
        'image_max_height_placeholder' => 'Leave blank to keep original height',
        'image_max_width_helper' => 'Set the maximum width of the image in pixels. The original width will be kept if this field is empty.',
        'image_max_height_helper' => 'Set the maximum height of the image in pixels. The original height will be kept if this field is empty.',
        'customize_upload_path' => 'Customize upload path',
        'customize_upload_path_helper' => 'Customize the upload path for media files. By default, the system will upload files to the ":path" folder.',
        'upload_path' => 'Upload path',
        'upload_path_placeholder' => 'Example: uploads',
        'upload_path_helper' => 'That folder will be created in /public. The default folder is ":folder". Then it will be uploaded into "/public/:folder".',
        'upload_path_warning' => 'The system won\'t move existing files to the new folder. If you want to move existing files to the new folder, you need to do it manually.',
        'convert_file_name_to_uuid' => 'Convert file name to UUID',
        'convert_file_name_to_uuid_helper' => 'When enabled, the system will convert the file name to UUID when uploading. It is useful to prevent duplicate file names and better security.',
        's3_path' => 'Custom S3 Path (Optional)',
        's3_path_placeholder' => 'Optional custom path in S3 bucket (e.g., uploads/media)',
    ],
    'license' => [
        'purchase_code' => 'Purchase code',
        'buyer' => 'Buyer',
    ],
    'field_type_not_exists' => 'This field type does not exist',
    'save_settings' => 'Save settings',
    'template' => 'Template',
    'description' => 'Description',
    'enable' => 'Enable',
    'send' => 'Send',
    'test_email_description' => 'To send test email, make sure you have updated configurations for sending email!',
    'test_email_input_placeholder' => 'Enter the email address to which you want to send test email.',
    'test_email_modal_title' => 'Send a test email',
    'test_send_mail' => 'Send test email',
    'test_email_send_success' => 'Email sent successfully!',
    'locale_direction_ltr' => 'Left to Right',
    'locale_direction_rtl' => 'Right to Left',
    'emails_warning' => 'You can add maximum :count emails',
    'email_add_more' => 'Add more',
    'generate' => 'Generate',
    'generate_thumbnails' => 'Generate thumbnails',
    'generate_thumbnails_success' => 'Thumbnails generated successfully. :count files have been generated!',
    'generate_thumbnails_error' => 'We were unable to regenerate thumbnails for :count files!',
    'generate_thumbnails_description' => 'Are you sure want to re-generate thumbnails for all images? This may take some time. Please do not navigate away from this page until the process is complete.',
    'enable_chunk_description' => 'Chunk size upload is used to upload large file size.',
    'watermark_description' => 'WARNING: Watermark is just added to new uploaded images, it won\'t be added to existing images. Disable watermark won\'t remove watermark from existing images.',
    'submit' => 'Submit',
    'back' => 'Back',
    'enter_sample_value' => 'Enter sample values for testing',
    'preview' => 'Preview',
    'media_size_width' => ':size size width must be greater than 0',
    'media_size_height' => ':size size height must be greater than 0',
    'cronjob' => [
        'name' => 'Cronjob',
        'description' => 'Cronjob allow you to automate certain commands or scripts on your site.',
        'is_not_ready' => 'To run the cronjob, follow the instructions below.',
        'is_working' => 'Congratulations! Your cronjob is running.',
        'is_not_working' => "Your cronjob is not running. Please check your server's cronjob.",
        'last_checked' => 'Last checked at :time.',
        'copy_button' => 'Copy',
        'setup' => [
            'name' => 'Setting up the Cronjob',
            'connect_to_server' => 'Connect to your server via SSH or any preferred method.',
            'open_crontab' => 'Open the crontab file using a text editor (e.g., `crontab -e`).',
            'add_cronjob' => 'Add the above command to the crontab file and save it.',
            'done' => 'The cronjob will now run at every minute and execute the specified command.',
            'learn_more' => 'You can learn more about cronjob from the Laravel :documentation',
            'documentation' => 'documentation',
            'copied' => 'Copied',
        ],
    ],
    'cache' => [
        'title' => 'Cache',
        'description' => 'Configure caching for optimized speed',
        'form' => [
            'cache_admin_menu' => 'Cache admin menu',
            'cache_admin_menu_helper' => 'Cache admin menu for optimized speed. This option should be disabled if you are developing or customizing the admin menu.',
            'enable_cache_site_map' => 'Cache sitemap',
            'enable_cache_site_map_helper' => 'Sitemap :url should be cached due to the large number of pages. If you have a small number of pages, you can disable this option.',
            'cache_time_site_map' => 'Sitemap cache timeout (in minutes)',
            'cache_front_menu' => 'Cache front menu',
            'cache_front_menu_helper' => 'Cache front menu for optimized speed',
            'cache_user_avatar' => 'Cache user avatar',
            'cache_user_avatar_helper' => 'For users without avatar, the system will generate avatars from their usernames. The avatars will be cached for optimized speed and will not be regenerated.',
            'shortcode_cache_enabled' => 'Cache shortcodes (UI blocks)',
            'shortcode_cache_enabled_helper' => 'Enable caching for shortcodes to improve performance. When enabled, shortcodes will be cached to reduce rendering time.',
            'shortcode_cache_ttl_default' => 'Default cache duration (seconds)',
            'shortcode_cache_ttl_default_helper' => 'The default duration to cache shortcodes that are not in the cacheable list.',
            'shortcode_cache_ttl_cacheable' => 'Cacheable shortcodes duration (seconds)',
            'shortcode_cache_ttl_cacheable_helper' => 'The duration to cache shortcodes that are in the cacheable list (static blocks, galleries, etc.).',
            'widget_cache_enabled' => 'Cache widgets',
            'widget_cache_enabled_helper' => 'Enable caching for widgets to improve performance. When enabled, widgets will be cached to reduce rendering time.',
            'widget_cache_ttl_default' => 'Default cache duration (seconds)',
            'widget_cache_ttl_default_helper' => 'The default duration to cache widgets that are not in the cacheable list.',
            'widget_cache_ttl_cacheable' => 'Cacheable widgets duration (seconds)',
            'widget_cache_ttl_cacheable_helper' => 'The duration to cache widgets that are in the cacheable list (text, menu, etc.).',
            'plugin_cache_enabled' => 'Cache installed plugins',
            'plugin_cache_enabled_helper' => 'Cache the list of installed plugins for improved performance. When enabled, the system will cache the plugin list for 30 minutes to reduce file system scans.',
        ],
    ],
    'appearance' => [
        'title' => 'Appearance',
    ],
    'panel' => [
        'common' => 'Common',
        'general' => 'General',
        'general_description' => 'View and update your general settings and activate license',
        'email' => 'Email',
        'email_description' => 'View and update your email settings and email templates',
        'media' => 'Media',
        'media_description' => 'View and update your media settings',
        'system' => 'System',
        'system_updater' => 'System Updater',
        'system_updater_description' => 'Update your system to the latest version',
        'others' => 'Others',
    ],
    'saving' => 'Saving...',
    'generating_media_thumbnails' => 'Generating media thumbnails...',
    'test_email_template' => 'Test email template',
    'select_email_template' => 'Select email template',
    'enums' => [
        'data_retention_period' => [
            '0' => 'Never',
            '1' => '1 Day',
            '3' => '3 Days',
            '7' => '1 Week',
            '30' => '1 Month',
            '90' => '3 Months',
            '180' => '6 Months',
            '365' => '1 Year',
        ],
    ],
    'validation' => [
        'aws_region_invalid' => 'The :attribute must be a valid AWS region (e.g., us-east-1, eu-west-1).',
    ],
];
