# NomadNest - 戶外帳篷租賃平台

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS (CDN)

## 本地開發

### Prerequisites

- Node.js 20+
- npm 9+

### 安裝與執行

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看應用。

### 可用指令

| 指令 | 說明 |
|------|------|
| `npm run dev` | 啟動開發伺服器 |
| `npm run build` | 建置生產版本（含 TypeScript 檢查） |
| `npm run preview` | 預覽生產版本 |
| `npm run type-check` | 執行 TypeScript 類型檢查 |

## 部署至 GitHub Pages

本專案已配置 GitHub Actions 自動部署。

### 設定步驟

1. **開啟 GitHub Pages**
   - 前往 Repository → Settings → Pages
   - Source 選擇 "GitHub Actions"

2. **觸發部署**
   - Push 到 `main` 分支會自動觸發部署
   - 或前往 Actions 頁面手動執行 workflow

部署完成後，網站會在：`https://<username>.github.io/test-tenttryproj/`

## 專案結構

```
├── .github/workflows/  # GitHub Actions 配置
│   └── deploy.yml      # 自動部署 workflow
├── components/         # React 元件
├── App.tsx             # 主應用元件
├── index.tsx           # 入口點
├── constants.ts        # 常數定義
├── types.ts            # TypeScript 型別定義
├── vite.config.ts      # Vite 配置
└── tsconfig.json       # TypeScript 配置
```

## License

Private - All rights reserved.
