# bread-website
Personal website

Compiled with postcss using Tailwind and AutoPrefixer

# to do
- Add menu hide on scroll down and show on up
- Add sections to onepage (in progress)
- Find a decent colour scheme

# bugs
- Stop header show hide events stacking
- Fix X not appearing when navigation menu is opened

# notes
- Commented code in onepage.less is animation for desktop nav
- Tailwind will only compile with required classes. These will be classes found in the content key in the tailwind config file (For now: root:html,js).

# possibly
- Use a third party to send contact from through webpage (research this).

# local dev
- npm install (to install dependencies)
- npm run build-css to compile tailwind css
- Add --watch flag to build scripts