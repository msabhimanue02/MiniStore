<div align="center">

# MiniStore
Modern mini e-commerce experience built with the Next.js App Router, TypeScript, Tailwind CSS, and server actions.  
Showcases curated lifestyle products, rich product detail pages, and a cart flow powered by React context.

</div>

## 📸 Features

- **Home page** with hero, locally hosted imagery, and dynamic product grid.
- **Product detail page** (`/products/[id]`) with large imagery, metadata, and `(+ / -)` quantity controls.
- **REST API** via Next.js route handlers (`/api/products` + `/api/products/[id]`).
- **Cart system** using context: add items, adjust quantities, view totals on a dedicated `/cart` page.
- **Responsive UI** with MiniStore branding, gradients, and polished Tailwind components.
- **Local product data** backed by `src/data/products.ts` so the app works offline and is easy to customize.

## 🛠 Tech Stack

| Layer        | Details                                |
|--------------|-----------------------------------------|
| Framework    | Next.js 16 (App Router, Server Components) |
| Language     | TypeScript                              |
| Styling      | Tailwind CSS                            |
| State        | React Context for cart                  |
| Images       | Local assets in `/public` + `next/image` |



