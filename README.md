```markdown
# 🔧 ShadCN Dashboard (Next.js App Router)

A modern and responsive admin dashboard built using **Next.js App Router**, **ShadCN UI**, and **TailwindCSS**, showcasing analytics, post listings, and dynamic charts.

## 📸 Preview

### Dashboard Summary
![Dashboard Summary](./public/dashboard-summary.png)

### Analytics Section
![Analytics Section](./public/analytics.png)

---

## 🚀 Features

- 📁 Post, Category, User & Comment summaries with icons (Lucide)
- 📊 Line charts showing traffic trends
- 📄 Dynamic list of blog posts with authors and dates
- 📚 Modular components for easy scalability
- 💅 Styled with TailwindCSS + ShadCN UI
- ⚙️ Sidebar & Top Navbar layout system

---



## 🧱 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/docs/app)
- **UI Library**: [ShadCN UI](https://ui.shadcn.com)
- **Styling**: Tailwind CSS
- **Icons**: [Lucide Icons](https://lucide.dev)
- **Font**: Geist Sans & Geist Mono

---

## 🗂️ Project Structure

```
![image](https://github.com/user-attachments/assets/7927c7cc-a60f-4f6e-8933-b2003b2077f0)


![image](https://github.com/user-attachments/assets/c3af2ba1-2baf-428d-8995-e0862ed63790)


![image](https://github.com/user-attachments/assets/84536f48-f77a-4da3-9def-c64d93a80e3f)

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/shadcn-dashboard.git
cd shadcn-dashboard
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📦 Components Overview

### 🔹 `<CardDemo />`
Renders stats cards with an icon, title, and count (e.g., Posts, Categories, etc.)

### 🔹 `<Post />`
Displays a list of posts with title, author, and date + Edit button

### 🔹 `<AnalyticsDataComponent />`
Line chart to visualize data trends over time

---

## ✨ Customization

- To update the post data, edit `data/postData.ts`
- To modify layout, change `components/ui/baseComponents/navBar.tsx` or `sideBar.tsx`

---

## 📄 License

MIT — free to use, customize, and share.

---

## 🙌 Credits

- [ShadCN](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [Vercel Fonts - Geist](https://vercel.com/fonts/geist)
``` 


