import { Flex } from './uis/flex/flex'
import { Header } from './uis/header/header'
import { LinkCard } from './uis/linkCard/linkCard'
import { Avatar } from './uis/avatar/avatar'
// import { Tag } from './uis/tag/tag'
import iconImage from './assets/icon.jpg'

/* === プロフィール部分 === */
const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center text-center gap-3 pt-12 pb-2">
      {/* === Step 1. アイコンを表示させる */}
      <Avatar iconPath={iconImage} initials='' size={96} />

      {/* === Step 2. 自分の名前、所属、一言を表示させる === */}
      {/* 💡自分の情報に書き換えよう */}
      
      <div className="mt-2">
        <span className="text-2xl font-bold text-[#3a3028] m-0">Masaya</span>
        <p className="text-sm text-[#8a7a6c] mt-0.5">Y M</p>
      </div>
      <p className="text-sm text-[#6b5744]">立命館大学 理工学研究科 2年</p>
      <p className="text-xs text-[#8a7a6c]">📍 滋賀</p>
      <p className="text-sm text-[#6b5744] leading-relaxed max-w-[320px] mt-1">
        Webとゲーム開発に興味のある大学生です。最近Reactを勉強中！ものづくりが好きな人とつながりたいです！
      </p>
     
    </div>
  )
}

type LinkData = {
  title: string
  subtitle: string
  url: string
}

/* === Step 3. リンクを表示させる */
const SocialLinkSection = () => {
  const socialLinks: LinkData[] = [
    {
      title: 'X (Twitter)',
      subtitle: '@geek_pjt',
      url: 'https://x.com/geek_pjt',
    },
    {
      title: 'GitHub',
      subtitle: 'taro-giiku',
      url: 'https://github.com',
    },
  ]

  return (
    <Flex direction="column" gap="md">
      <Header title="SNS" as="h2" />

      {/* 💡ここに自分のSNSリンクを貼り付けよう */}
      
    <LinkCard
      title="X (Twitter)"
      subtitle="@geek_pjt"
      href="https://x.com/geek_pjt"
    />
   

      {socialLinks.map(link =>
      <LinkCard
        title={link.title}
        subtitle={link.subtitle}
        href={link.url}
        key={link.url}
      />)}
    </Flex>
  )
}

/* Step Ex1. SNS以外のリンクも表示させる */
const PersonalLinkSection = () => {
  // const personalLinks: LinkData[] = [
  //   {
  //     title: 'ポートフォリオサイト',
  //     subtitle: 'これまで作った作品',
  //     url: 'https://portfolio.example.com',
  //   },
  //   {
  //     title: '技術ブログ',
  //     subtitle: 'エンジニアブログ',
  //     url: 'https://taro-blog.example.com',
  //   },
  // ]

  return (
    <Flex direction="column" gap="md">
      <Header title="Links" as="h2" />

      {/* 💡SNS以外のリンクを表示させるコードを書いてみよう */}
    </Flex>
  )
}

/* === Step Ex2. タグを表示させる */
// const TagSection = () => {
//   const tags = ['React', 'TypeScript', 'Unity', 'ゲーム制作', '写真']

//   {
//     /* 💡完成画像を参考に、タグを表示させるコードを書いてみましょう
//     タグは Tag コンポーネントで表示できます
//     App 内に TagSection を配置するのも忘れずに！ */
//   }
//   return (
//     <Flex direction="row" gap="sm" wrap="wrap" justify="center">
//       <></>
//     </Flex>
//   )
// }

/* === ページ本体 === */
function App() {
  return (
    <div className="flex flex-col items-center gap-8 px-6 pb-16">
      ハンズオン始まるよ
      {/* 💡 Ctrl + / (Macは Cmd + /) を押すと、コメントを外せるよ */}
      <ProfileSection />
      <SocialLinkSection /> 
      <PersonalLinkSection />
    </div>
  )
}

export default App
