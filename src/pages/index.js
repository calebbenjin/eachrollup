import Layout from "@/components/Layout"
import HeroSection from "@/components/HeroSection"
import CommunitySection from "@/components/CommunitySection"

export default function Home() {
  return (
    <Layout tile="Welcome to CapitalRollup">
      <HeroSection />
      <CommunitySection />
    </Layout>
  )
}
