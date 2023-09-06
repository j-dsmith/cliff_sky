![Landing Page](https://i.imgur.com/SBTxl6C.png)


# Cliff & Sky
This site was created as a portfolio for a local artist and graphic designer.

## Site
The project was created using TypeScript, [Next.js](https://nextjs.org), and [Sanity CMS](https://www.sanity.io). It was important for the site owner to add content to their portfolio seamlessly and Sanity made it simple to scaffold out a solution for that use case. The latest version of Next.js was used, including the new App Router. Next.js is an extremely powerful platform for building React applications, and the new App Router makes utilizing powerful React features like Server Components and Suspense flexible and easy.

### Style
I chose to use [Tailwind](https://www.tailwindcss.com) for the styling on this project. Tailwind's design system is my preferred choice for quickly scaffolding out a new project. Implementing styles without leaving JSX makes it much easier to focus on application structure and logic than building out and implementing a design system using other style solutions. This is especially useful when building with a mobile first approach as breakpoints are built into Tailwind's utility classes, making designing for multiple screen sizes at once a consistent process.

Animations are implemented using [Framer Motion](https://www.framer.com/motion). Framer Motion is a fantastic React animation library that offers a user friendly API for its `motion` components which can be quickly scaled up to add complex and dynamic animations linked to conditional or gesture-based triggers throughout the entire component tree. To maximize Server Components and the increase in performance they can offer, especially when using a JavaScript heavy library like Framer, I chose whenever possible to separate out Animations into reusable components that can be marked as Client Components. Framer's `motion` components implement `useEffect` and other hooks under the hood, so they must rendered in Client Components in Next.js 13. This separation of the animation components means the rest of the component tree could remain Server Components and only the animations themselves would be rendered on the client, rather than the parent components as well, reducing bundle size. 

## Pages / Sections

### Landing Page - Hero
![Hero Section](https://i.imgur.com/SBTxl6C.png)

### Landing Page - Projects
![Projects Section](https://i.imgur.com/A1SzJg0.png)

### Contact Page
![Contact Page](https://i.imgur.com/ZqdJ1zD.png)

## Next Steps
Currently I am developing an E-Commerce page using Stripe to implement online store functionality.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
