# bread-website
Personal website

Compiled with postcss using Tailwind and AutoPrefixer

# to do
- Redesign mobile menu to full page
- Add menu hide on scroll down and show on up
- Add sections to onepage (in progress)
- Find a decent colour scheme
- Minimize existing css with tailwind classes

# bugs
- tooltip hover: because of remove 200ms if tooltips are quick triggered, can lead to removal on hover

# notes
- Commented code in onepage.less is animation for desktop nav
- Tailwind will only compile with required classes. These will be classes found in the content key in the tailwind config file (For now: root:html,js).

# possibly

# local dev
- npm install (to install dependencies)
- npm run build-css to compile tailwind css
- Add --watch flag to build scripts