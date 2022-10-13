## This CRUD APP uses
- NEXT.JS framework with typescript v4.8.4
- css style using Reactsctap v9, Bootstrap v5 and css module
- Node v16
## Quick start

- run `npm i` or `npm install`
- run `npm run dev`

## File Structure
Within the download you'll find the following directories and files:

|--- tsconfig.json
|--- README.md
|--- package.json
|--- package-lock.json
|--- next.congig.js
|--- next-env.d.ts
|--- .gitignore
|--- .eslintrc.json
|___ src
    |--- assets
    |   |--- icons
    |   |    |--- arrow_down_click.png
    |   |    |--- arrow_down.png
    |   |    |--- dashboard_click.png
    |   |    |--- dashboard_unclick.png
    |   |    |--- delete_icon.png
    |   |    |--- edit_icon.png
    |   |    |--- menu.png
    |   |    |--- plus-outlined.png
    |   |    |--- sales_click.png
    |   |    |--- sales_unclick.png
    |   |    |--- search.png
    |   |    |--- user-management_click.png
    |   |    |--- user-management_unclick.png
    |   |___ images
    |        |--- Arlo-pro-4.png
    |        |--- block-chart.png
    |        |--- blurry.png
    |        |--- circle-chart.png
    |        |--- Nighthawl-R7800.png
    |        |--- r6330-netgear.png
    |        |--- webcam-c310.png
    |        |__ WN821N.png
    |   
    |--- modules
    |    |___ app
    |         |---dashboard
    |         |    |---components
    |         |    |   |___dashboard.component.tsx
    |         |    |---styles
    |         |        |---dashboard.style.tsx
    |         |        |___dashboard.module.css
    |         |
    |         |---login
    |         |    |---components
    |         |    |   |___login.component.tsx
    |         |    |---styles
    |         |        |---login.style.tsx
    |         |        |___login.module.css
    |         |
    |         |---navbar
    |         |    |---components
    |         |    |   |___navbar.component.tsx
    |         |    |---styles
    |         |        |---navbar.style.tsx
    |         |        |___navbar.module.css
    |         |
    |         |---sales
    |         |    |---components
    |         |    |   |___sales.component.tsx
    |         |    |---styles
    |         |        |---sales.style.tsx
    |         |        |___sales.module.css
    |         |
    |         |---user-management
    |         |    |---components
    |         |    |   |___userManagement.component.tsx
    |         |    |___styles
    |
    |--- pages
    |    |--- admin
    |    |    |___ dashboard.tsx
    |    |
    |    |--- api
    |    |    |--- dataDummy
    |    |    |    |___ sales.tsx
    |    |    |___ login.ts
    |    |
    |    |--- auth
    |    |     |___ login.tsx
    |    |
    |    |--- _app.tsx
    |    |--- _document.tsx
    |    |___ index.tsx
    |    
    |--- public
    |    |--- favicon.ico
    |    |--- vercel.svg
    |___ styles
         |--- globals.css
         |___ Home.module.css