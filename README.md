# OpenLens - 攝影作品平台 📸

一個現代化的攝影作品展示和銷售平台，提供高品質的攝影作品瀏覽、下載和付費購買功能。

## ✨ 功能特色

### 🎨 作品展示
- **精美作品集** - 以網格布局展示攝影作品，支援回應式設計
- **作品預覽** - 點擊查看作品詳情和高品質預覽
- **分類篩選** - 支援按類別、風格、主題篩選作品

### 💰 付費功能
- **線上購買** - 支援攝影作品的線上購買和支付
- **多種支付方式** - 整合主流支付網關（支付寶、微信支付、銀行卡等）
- **價格體系** - 靈活的價格設定，支援不同解析度不同定價
- **訂單管理** - 使用者購買歷史和訂單追蹤

### 📥 下載服務
- **高清下載** - 購買後可下載原始解析度作品
- **多種格式** - 支援JPEG、PNG、TIFF等多種格式
- **批次下載** - 支援多作品批次打包下載
- **下載保護** - 防止未授權使用者下載

### 👤 使用者系統
- **使用者註冊登入** - 支援郵箱、社群媒體帳號登入
- **個人中心** - 使用者作品收藏、購買歷史管理
- **收藏夾** - 可收藏喜歡的作品，方便後續查看

## 🚀 部署指南

### GitHub Pages 自動部署

本專案已配置 GitHub Actions 自動部署工作流程，支援推送到 `main` 分支時自動建置並部署到 GitHub Pages。

#### 設定步驟

1. **啟用 GitHub Pages**
   - 前往你的 GitHub 倉庫頁面
   - 點擊 **Settings** 標籤
   - 在左側選單中選擇 **Pages**
   - 在 **Source** 設定中選擇 **GitHub Actions**

2. **設定靜態匯出**
   - 專案已配置 `next.config.ts` 支援靜態匯出
   - 建置時會產生靜態檔案到 `out/` 目錄
   - 支援 GitHub Pages 的路徑設定

#### 工作流程功能

- ✅ **靜態匯出**: Next.js 應用程式建置為靜態檔案
- ✅ **自動部署**: 推送到 `main` 分支時自動部署
- ✅ **程式碼檢查**: 運行 ESLint 和建置測試
- ✅ **依賴緩存**: 使用 npm 緩存加速建置
- ✅ **手動部署**: 支援從 GitHub Actions 手動觸發部署

#### 部署網址

部署成功後，你的網站將可在以下網址訪問：

```
https://120061203.github.io/openlens
```

#### 靜態匯出設定說明

專案使用以下 Next.js 設定來支援靜態匯出：

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',           // 啟用靜態匯出
  trailingSlash: true,        // 為所有路由添加結尾斜線
  images: {
    unoptimized: true,        // 停用圖片優化（GitHub Pages 不支援）
  },
  // GitHub Pages 設定
  basePath: process.env.NODE_ENV === 'production' ? '/openlens' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/openlens/' : '',
};
```

#### 注意事項

- **靜態網站限制**: GitHub Pages 部署的靜態網站無法使用服務端功能（如 API 路由）
- **圖片優化**: 已停用 Next.js 的圖片優化功能，建議使用靜態圖片檔案
- **路由設定**: 支援客戶端路由，但需要正確設定 `basePath`

## 🛠️ 安裝與設定

### 環境需求
- Node.js 18.x 或更高版本
- npm 或 yarn 或 pnpm

### 安裝步驟

1. **複製專案**
```bash
git clone <repository-url>
cd openlens
```

2. **安裝依賴**
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

3. **環境配置**
建立 `.env.local` 檔案並配置必要的環境變數：
```env
# 資料庫配置
DATABASE_URL="your-database-url"

# 支付配置
PAYMENT_SECRET_KEY="your-payment-secret"
PAYMENT_PUBLIC_KEY="your-payment-public"

# 檔案儲存配置
STORAGE_BUCKET="your-storage-bucket"
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"

# 郵件服務配置
SMTP_HOST="your-smtp-host"
SMTP_PORT="587"
SMTP_USER="your-smtp-user"
SMTP_PASS="your-smtp-password"
```

4. **資料庫初始化**
```bash
npm run db:migrate
npm run db:seed
```

5. **啟動開發伺服器**
```bash
npm run dev
```

6. **建置生產版本**
```bash
npm run build
npm start
```

開啟 [http://localhost:3000](http://localhost:3000) 查看應用。

## 📁 專案結構

```
openlens/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   │   ├── auth/          # 認證相關介面
│   │   ├── payment/       # 支付相關介面
│   │   ├── photos/        # 作品相關介面
│   │   └── users/         # 使用者相關介面
│   ├── components/        # 可複用元件
│   ├── globals.css       # 全域樣式
│   ├── layout.tsx        # 根佈局
│   └── page.tsx          # 首頁
├── components/            # 通用元件
│   ├── Footer.tsx        # 頁腳元件
│   └── Navbar.tsx        # 導覽列元件
├── lib/                  # 工具庫和配置
│   ├── db.ts            # 資料庫配置
│   ├── payment.ts       # 支付工具
│   └── storage.ts       # 檔案儲存工具
├── public/              # 靜態資源
│   ├── images/          # 圖片資源
│   └── uploads/         # 使用者上傳檔案
├── types/               # TypeScript 類型定義
└── utils/               # 工具函數
```

## 🎯 使用指南

### 攝影師使用

1. **上傳作品**
   - 登入攝影師帳號
   - 在個人中心上傳攝影作品
   - 設定作品資訊、價格和授權條款

2. **管理作品**
   - 查看作品銷售統計
   - 管理作品價格和庫存
   - 處理使用者諮詢和售後

3. **收益管理**
   - 查看銷售收入統計
   - 申請提現到銀行帳戶
   - 下載財務報表

### 買家使用

1. **瀏覽作品**
   - 瀏覽首頁推薦作品
   - 使用篩選功能尋找特定作品
   - 預覽作品詳情和樣圖

2. **購買流程**
   - 將心儀作品加入購物車
   - 選擇購買選項（解析度、格式等）
   - 完成線上支付
   - 支付成功後自動獲得下載連結

3. **下載作品**
   - 在個人中心查看已購作品
   - 點擊下載取得高清原圖
   - 支援多次下載和批次下載

## 🔧 開發指南

### 新增功能

1. **前端元件開發**
```typescript
// components/NewFeature.tsx
import React from 'react';

interface NewFeatureProps {
  // props 定義
}

export const NewFeature: React.FC<NewFeatureProps> = ({ /* props */ }) => {
  return (
    <div className="new-feature">
      {/* 元件內容 */}
    </div>
  );
};
```

2. **API 介面開發**
```typescript
// app/api/new-feature/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // API 邏輯
  return NextResponse.json({ data: result });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // 處理 POST 請求
  return NextResponse.json({ success: true });
}
```

### 程式碼規範

- 使用 TypeScript 進行類型檢查
- 遵循 ESLint 配置的程式碼規範
- 元件使用函數式元件和 Hooks
- CSS 類別名稱使用 Tailwind CSS 約定
- 檔案命名使用 kebab-case

## 🤝 貢獻指南

歡迎社群貢獻！請遵循以下步驟：

1. Fork 專案倉庫
2. 建立功能分支 (`git checkout -b feature/AmazingFeature`)
3. 遞交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送至分支 (`git push origin feature/AmazingFeature`)
5. 建立 Pull Request

### 貢獻需求

- 確保程式碼通過所有測試
- 更新相關文件
- 遵循專案的程式碼規範
- 為新功能新增適當的測試用例

## 📄 授權條款

本專案採用 [MIT 授權條款](LICENSE) 開源協議。

## 📞 聯絡方式

如有問題或建議，請透過以下方式聯絡：

- 📧 郵箱：contact@openlens.com
- 💬 微信公眾號：OpenLens攝影平台
- 🐛 問題回饋：[GitHub Issues](https://github.com/your-username/openlens/issues)

## 🙏 致謝

感謝所有為本專案做出貢獻的開發者、設計師和攝影師！

---

**OpenLens** - 為攝影藝術搭建橋樑，讓優秀作品被更多人欣賞和擁有。
