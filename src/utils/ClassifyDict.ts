type classifyDictType = {
  [key: string]: {
    [key: string]: {
      amount: number,
      gl: string
    }
  }
}

export const classifyDict: classifyDictType = {
  "リザードン/ピジョット/ビーダル": {
    "リザードンex": { "amount": 1, "gl": "g" },
    "ピジョットex": { "amount": 1, "gl": "g" },
    "ビーダル": { "amount": 1, "gl": "g" },
    "ドラパルトex": { "amount": 1, "gl": "l" },
  },
  "リザードン/ピジョット": {
    "リザードンex": { "amount": 1, "gl": "g" },
    "ピジョットex": { "amount": 1, "gl": "g" },
    "ビーダル": { "amount": 1, "gl": "l" },
    "ドラパルトex": { "amount": 1, "gl": "l" },
  },
  "リザードン/ビーダル": {
    "リザードンex": { "amount": 1, "gl": "g" },
    "ビーダル": { "amount": 1, "gl": "g" },
    "ピジョットex": { "amount": 1, "gl": "l" },
    "ドラパルトex": { "amount": 1, "gl": "l" },
  },
  "リザードン(ピジョット/ビーダル以外)": {
    "リザードンex": { "amount": 1, "gl": "g" },
    "ビーダル": { "amount": 1, "gl": "l" },
    "ピジョットex": { "amount": 1, "gl": "l" },
    "ドラパルトex": { "amount": 1, "gl": "l" },
  },
  "ロストギラティナ": {
    "ギラティナVSTAR": { "amount": 2, "gl": "g" },
    "ミラージュゲート": { "amount": 1, "gl": "g" },
    "アルセウスVSTAR": { "amount": 1, "gl": "l" },
  },
  "ロストバレット(ゲッコウガ)": {
    "キュワワー": { "amount": 3, "gl": "g" },
    "かがやくゲッコウガ": { "amount": 1, "gl": "g" },
    "ギラティナVSTAR": { "amount": 2, "gl": "l" },
  },
  "ロストバレット(リザードン)": {
    "キュワワー": { "amount": 3, "gl": "g" },
    "かがやくリザードン": { "amount": 1, "gl": "g" },
    "ドラパルトex": { "amount": 1, "gl": "l" },
  },
  "ルギア/アーケオス": {
    "ルギアVSTAR": { "amount": 2, "gl": "g" },
    "アーケオス": { "amount": 2, "gl": "g" },
  },
  "ドラパルト/ネイティオ": {
    "ドラパルトex": { "amount": 2, "gl": "g" },
    "ネイティオ": { "amount": 1, "gl": "g" },
  },
  "ドラパルト/ピジョット": {
    "ドラパルトex": { "amount": 2, "gl": "g" },
    "ピジョットex": { "amount": 1, "gl": "g" },
  },
  "ロストドラパルト": {
    "ドラパルトex": { "amount": 2, "gl": "g" },
    "キュワワー": { "amount": 1, "gl": "g" },
  },
  "おまつりおんど": {
    "カミッチュ": { "amount": 2, "gl": "g" },
    "バチンキー": { "amount": 2, "gl": "g" },
  },
  "ゲッコウガ": {
    "ゲッコウガex": { "amount": 2, "gl": "g" },
  },
  "アルセウス/ギラティナ": {
    "アルセウスVSTAR": { "amount": 1, "gl": "g" },
    "ギラティナVSTAR": { "amount": 1, "gl": "g" },
  },
  "アルセウス": {
    "アルセウスVSTAR": { "amount": 1, "gl": "g" },
    "ギラティナVSTAR": { "amount": 1, "gl": "l" },
    "リザードンex": { "amount": 1, "gl": "l" },
    "パオジアンex": { "amount": 1, "gl": "l" },
  },
  "サーナイト": {
    "サーナイトex": { "amount": 1, "gl": "g" },
  },
  "オリジンパルキア": {
    "オリジンパルキアVSTAR": { "amount": 2, "gl": "g" },
    "タケルライコex": { "amount": 1, "gl": "l" },
    "サーフゴーex": { "amount": 1, "gl": "l" },
    "ゲッコウガex": { "amount": 1, "gl": "l" },
    "セグレイブ": { "amount": 1, "gl": "l" },
  },
  "パオジアン/セグレイブ": {
    "パオジアンex": { "amount": 2, "gl": "g" },
    "セグレイブ": { "amount": 2, "gl": "g" },
  },
  "カビゴンStall": {
    "カビゴン": { "amount": 3, "gl": "g" },
  },
  "ピジョットコントロール": {
    "ピジョットex": { "amount": 2, "gl": "g" },
    "ボタン": { "amount": 1, "gl": "g" },
    "ビワ": { "amount": 1, "gl": "g" },
    "カウンターキャッチャー": { "amount": 2, "gl": "g" },
    "ともだちてちょう": { "amount": 2, "gl": "g" },
  },
  "未来テツノカイナex": {
    "テツノカイナex": { "amount": 3, "gl": "g" },
    "ミライドン": { "amount": 2, "gl": "g" },
  },
  "未来バレット": {
    "ミライドン": { "amount": 2, "gl": "g" },
    "テツノカシラex": { "amount": 1, "gl": "g" },
    "テツノカイナex": { "amount": 3, "gl": "l" },
  },
  "テツノイバラ": {
    "テツノイバラex": { "amount": 4, "gl": "g" },
  },
  "トドロクツキex": {
    "トドロクツキex": { "amount": 2, "gl": "g" },
    "ダークパッチ": { "amount": 2, "gl": "g" },
  },
  "タケルライコ/オーガポン": {
    "タケルライコex": { "amount": 2, "gl": "g" },
    "オーガポン みどりのめんex": { "amount": 2, "gl": "g" },
  },
  "トドロクツキ(あだうちやばね)": {
    "トドロクツキ": { "amount": 4, "gl": "g" },
  },
  "イダイナキバMill": {
    "イダイナキバ": { "amount": 3, "gl": "g" },
  },
  "ミライドンex": {
    "ミライドンex": { "amount": 2, "gl": "g" },
  },
  "サーフゴーex": {
    "サーフゴーex": { "amount": 1, "gl": "g" },
  },
  "オリジンディアルガ": {
    "オリジンディアルガVSTAR": { "amount": 1, "gl": "g" },
  },
  "マスカーニャex": {
    "マスカーニャex": { "amount": 1, "gl": "g" },
  },
  "ヒスイゾロアーク": {
    "ヒスイゾロアークVSTAR": { "amount": 1, "gl": "g" },
  },
  "クエスパトラex": {
    "クエスパトラex": { "amount": 2, "gl": "g" },
  },
};