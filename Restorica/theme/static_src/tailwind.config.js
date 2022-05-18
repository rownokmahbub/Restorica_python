/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
    content: [
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */

        /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
        '../templates/**/*.html',

        /* 
         * Main templates directory of the project (BASE_DIR/templates).
         * Adjust the following line to match your project structure.
         */
        '../../templates/**/*.html',
        
        /* 
         * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
         * Adjust the following line to match your project structure.
         */
        '../../**/templates/**/*.html',

        /**
         * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
         * patterns match your project structure.
         */
        /* JS 1: Ignore any JavaScript in node_modules folder. */
        // '!../../**/node_modules',
        /* JS 2: Process all JavaScript files in the project. */
        // '../../**/*.js',

        /**
         * Python: If you use Tailwind CSS classes in Python, uncomment the following line
         * and make sure the pattern below matches your project structure.
         */
        // '../../**/*.py'
    ],
    theme: {

        container: {
          center: true,
          padding: "1rem",
        },
        extend: {
          
          fontFamily: {
          'Dancing': ['Dancing Script'],
          'josefin': ['Josefin Sans'],
    
        },
    
    
          boxShadow: {
            'cla-blue': '35px 35px 68px 0px rgba(224, 230, 249, 0.5), inset -12px -12px 16px 0px rgba(224, 230, 249, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)',
            'cla-green': '35px 35px 68px 0px rgba(224, 249, 239, 0.5), inset -12px -12px 16px 0px rgba(224, 249, 239, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)',
            'cla-violate': '35px 35px 68px 0px rgba(244, 224, 249, 0.5), inset -12px -12px 16px 0px rgba(244, 224, 249, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)',
            'cla-slate': '35px 35px 68px 0px rgba(241, 245, 249, 0.5), inset -12px -12px 16px 0px rgba(241, 245, 249, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)',
            'cla-gray': '35px 35px 68px 0px rgba(249, 250, 251, 0.5), inset -12px -12px 16px 0px rgba(249, 250, 251, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)',
            'cla-red': '35px 35px 68px 0px rgba(254, 242, 242, 0.5), inset -12px -12px 16px 0px rgba(254, 242, 242, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)',
            'cla-cyan': '35px 35px 68px 0px rgba(236, 254, 255, 0.5), inset -12px -12px 16px 0px rgba(236, 254, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)',
            'cla-fuchsia': '35px 35px 68px 0px rgba(253, 244, 255, 0.5), inset -12px -12px 16px 0px rgba(253, 244, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)',
            'cla-pink': '35px 35px 68px 0px rgba(253, 242, 248, 0.5), inset -12px -12px 16px 0px rgba(253, 242, 248, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)',
            'neo': '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
          },
          animation: {
            blob: "blob 5s infinite",
          },
          keyframes: {
            blob: {
              "0%": {
                transform: "translate(0px, 0px) scale(1)",
              },
              "33%": {
                transform: "translate(30px, -50px) scale(1.1)",
              },
              "66%": {
                transform: "translate(-20px, 20px) scale(0.9)",
              },
              "100%": {
                transform: "tranlate(0px, 0px) scale(1)",
              },
            },
          },
        },
      },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
