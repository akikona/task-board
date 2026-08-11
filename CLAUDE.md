# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

`task-board` はタスク管理アプリです。React + Viteで実装されています。

### 機能

- テキスト入力でタスクを追加
- チェックボックスで完了・未完了を切り替え（完了タスクはグレー＋取り消し線で表示）
- タスクの削除
- タスク一覧は`localStorage`に自動保存され、ページをリロードしても消えない

## 技術スタック

- **React 19** — UIライブラリ。関数コンポーネント＋Hooksのみを使用（クラスコンポーネントは使わない）
- **Vite** — ビルドツール・開発サーバー
- **oxlint** — Lint（`npm run lint`）
- **素のCSS** — CSSフレームワークやCSS-in-JSは使用しない。コンポーネントごとに対応する`.css`ファイルを用意する（例: `App.jsx` ⇄ `App.css`）
- **状態管理** — 外部ライブラリは使わず、`useState`/`useEffect`のみで管理する規模のアプリ
- **永続化** — `localStorage`を直接使用（バックエンド・DBなし）

## 開発コマンド

```bash
npm install       # 依存関係のインストール
npm run dev       # 開発サーバー起動（http://localhost:5173）
npm run lint      # Lint実行
npm run build     # 本番ビルド（distに出力）
npm run preview   # ビルド結果をローカルでプレビュー
```

## コンポーネントの命名規約

- コンポーネント名・ファイル名は **PascalCase**（例: `App.jsx`）。ファイル名とコンポーネント名（export defaultする関数名）を一致させる。
- イベントハンドラ関数は **camelCase**。フォーム送信など汎用的なものは`handle`接頭辞（例: `handleSubmit`）、特定の操作を表すものは動詞から始める（例: `toggleTask`, `deleteTask`）。
- CSSのクラス名は **ケバブケース**（例: `task-form`, `task-list`, `delete-button`）。
- 新しくコンポーネントを分割する場合は`src/`直下に`ComponentName.jsx`として配置する（現状は`App.jsx`に集約されているが、複雑化した場合はこの規約に従って分割する）。

## Git運用ルール

- **コードに変更を加えたら、その都度コミットしてGitHubへプッシュすること。** 変更を溜め込まず、1つの変更（1機能・1修正など）が完了するごとにコミット→プッシュまで行う。
- コミットメッセージは変更内容が分かるように簡潔に書く。
- プッシュ前にビルド・テスト・Lintが存在する場合は実行し、通ることを確認してから行う。
- force push（`--force`）や履歴の書き換えは行わない。

## GitHubリポジトリ

https://github.com/akikona/task-board.git

## デプロイ先

https://github.com/akikona/task-board.git

`main`ブランチにpushすると、GitHub Actions（`.github/workflows/deploy.yml`）が自動でビルドし、GitHub Pagesへデプロイする。公開URLは https://akikona.github.io/task-board/ 。
