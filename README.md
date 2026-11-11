# Namma Yoga — website starter

A responsive, static yoga-class website built with HTML, CSS and vanilla JavaScript.

## Preview locally
Open `index.html` in a browser. For a local web server, run:
`python -m http.server 8000`
Then visit `http://localhost:8000`.

## Deploy to Vercel
1. Create a GitHub repository and upload the contents of this folder.
2. Sign in at https://vercel.com/ and choose **Add New → Project**.
3. Import the GitHub repository.
4. Select **Other** as the framework preset if Vercel asks. No build command is needed; the site is static.
5. Set the output directory to `.` if prompted, then deploy.
6. Add your domain in Project → Settings → Domains and follow the DNS instructions.

You can also deploy using the Vercel CLI:
`npm i -g vercel`
`vercel`
`vercel --prod`

## Required owner updates before public launch
- Replace `hello@namma-yoga.example` in `script.js` with the official enquiry email.
- Update class formats, timings, teacher biography and contact details in `index.html`.
- Replace the stock photos with approved photos of the actual teachers/classes.
- Add a privacy notice and consent wording appropriate to your registration process.
- The current form opens the visitor's email app; it does not store enquiries. Connect a secure form backend or CRM if you want submissions stored online.

## Notes
- This package does not include a database, user login, payment processing or class booking engine.
- External fonts and stock photographs load from third-party services and require internet access.
- All class timings and teacher details are intentionally written as placeholders rather than invented facts.
