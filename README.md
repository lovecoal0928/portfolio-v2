# ポートフォリオV2

前回JSとHTMLで書いていたのでNextjsとtailwindと諸々のライブラリ使って作りなおし。

## Quick Start

```bash
# プロジェクト作成
npx create-next-app next-portfolio --ts

# Tailwindcssの導入
yarn add -D tailwindcss

# サーバー起動
yarn dev
```
## 導入したライブラリ

### スクロールバーカスタマイズできるやつ
tailwind-scrollbar
```bash
yarn add tailwind-scrollbar
```

### スクロールバー消せるやつ（横スクロールいらんよねって話）
tailwind-scrollbar-hide
```bash
yarn add tailwind-scrollbar-hide
```

### reactでヌルっとページ内リンク作ってくれるやつ
react-anchor-link-smooth-scroll
```bash
yarn add react-anchor-link-smooth-scroll
```

### AnchorLinkが正常にインポートできなかったので入れた
next-swc-loader
```bash
yarn add -D @swc/core swc-loader
```

### アイコンたくさん追加
React Icons
```bash
yarn add react-icons --save
```

# おなじみの状態管理ライブラリ
Recoil
```bash
yarn add Recoil
```

### グラフの描画のために入れた
```bash
yarn add -D chart.js react-chartjs-2
```

### お問合せフォーム用のライブラリ
node mailer
```bash
yarn add nodemailer
```

## デプロイ先

https://kaitos-portfolio.vercel.app/