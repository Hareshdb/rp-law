import AboutFirm from '@components/about/AboutFirm'
import Banner from '@components/about/Banner'
import CoreValues from '@components/about/CoreValues'
import MissionVision from '@components/about/MissionVision'
import PreFooterCTA from '@components/about/PreFooterCTA'

export default function AboutUsPage() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <Banner />
      <AboutFirm />
      <MissionVision />
      <CoreValues />
      <PreFooterCTA />
    </main>
  )
}