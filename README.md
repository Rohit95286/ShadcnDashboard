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

![image](https://github.com/user-attachments/assets/9d0da842-cf34-45fc-83f4-ae581c7aa509)

![image](https://github.com/user-attachments/assets/45f10625-2a92-4b91-acb5-1f464bf3f03e)


![image](https://github.com/user-attachments/assets/9cf2fc78-da1a-4161-84ab-3ba3542e60b7)


![image](https://github.com/user-attachments/assets/c99da7d3-5e1a-4737-8a50-0bfc444489a6)


## 🧱 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/docs/app)
- **UI Library**: [ShadCN UI](https://ui.shadcn.com)
- **Styling**: Tailwind CSS
- **Icons**: [Lucide Icons](https://lucide.dev)
- **Font**: Geist Sans & Geist Mono

---

## 🗂️ Project Structure

```
.
├── app/
│   └── layout.tsx          # Root layout with NavBar and Sidebar
│   └── page.tsx            # Main dashboard page
├── components/
│   └── ui/baseComponents/
│       ├── analyticsData.tsx
│       ├── dasboardCards.tsx
│       ├── navBar.tsx
│       ├── post.tsx
│       ├── sideBar.tsx
├── data/
│   └── postData.ts         # Post list data
├── public/
│   └── dashboard-summary.png
│   └── analytics.png
├── styles/
│   └── globals.css         # Global styles
```

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


