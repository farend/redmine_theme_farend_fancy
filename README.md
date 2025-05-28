# Redmine用テーマ "farend fancy"

Redmineの画面を楽しく親しみやすくすることを目的として、farend basicをベースにアイコン表示の追加を中心とした変更を行いました。

<kbd><img src="https://github.com/farend/redmine_theme_farend_fancy/blob/images/menu.png" /></kbd>

このテーマは、Redmimeのクラウドサービス [My Redmine](https://hosting.redmine.jp/) のサービス提供用に開発し、OSSとして公開したものです。

[<img src="https://www.farend.co.jp/files/myredmine-logo/hz/myredmine-logo-hz.png" width="250">](https://hosting.redmine.jp/)

## farend fancyテーマの特長

* 主要なタブやリンクにアイコン表示が追加された親しみやすい画面です。
* メニューの位置や配色はデフォルトのテーマに近いので、既存のテーマに慣れ親しんだ方も違和感なくご利用になれます。
* 日本語環境での画面の見やすさなど、farend basicの特長を継承しています。

## インストール方法

### themes以下にテーマを保存

Redmineのインストールディレクトリで以下のコマンドを実行してください。

```
git clone https://github.com/farend/redmine_theme_farend_fancy.git themes/farend_fancy
```

gitコマンドが利用できない場合、以下のURLからzipファイルをダウンロードし展開してください。

```
https://github.com/farend/redmine_theme_farend_fancy/archive/master.zip
```

アーカイブを展開した結果作成されたディレクトリをRedmineインストールディレクトリ以下のthemesディレクトリにfarend_fancyという名前でコピーしてください。

#### Redmine5.1以前の場合

Redmineのインストールディレクトリで以下のコマンドを実行してください。

```
git clone -b redmine5.1 https://github.com/farend/redmine_theme_farend_fancy.git public/themes/farend_fancy
```

### 新しいテーマの利用

Redmineの管理画面で新しいテーマを利用する設定を行います。

「管理」→「設定」→「表示」画面内の項目「テーマ」で「Fare fancy」を選択、画面最下部の「保存」ボタンをクリックしてください。
