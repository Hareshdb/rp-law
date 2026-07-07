import ContactCtaSection from '@/components/home/contact-cta-section'
import { getAboutPageData } from '@/lib/apis'
import { PLACEHOLDER_IMAGE } from '@/lib/constants'
import { getPageMetadata } from '@/lib/metadata'
import { urlFor } from '@/lib/sanity-image-builder'
import AboutFirm from '@components/about/AboutFirm'
import Banner from '@components/about/Banner'
import CoreValues from '@components/about/CoreValues'
import FounderProfile from '@components/about/FounderProfile'
import MissionVision from '@components/about/MissionVision'
import Testimonials from '@components/home/testimonials'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('about')
}

export default async function AboutUsPage() {
  const aboutPageData = await getAboutPageData()

  const featuredImageUrl = aboutPageData?.featuredImage
    ? urlFor(aboutPageData.featuredImage).width(1920).quality(85).auto('format').url()
    : PLACEHOLDER_IMAGE

  const aboutUsImageUrl = aboutPageData?.aboutUsImage
    ? urlFor(aboutPageData.aboutUsImage).width(900).quality(85).auto('format').url()
    : 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80'

  const missionIconUrl = aboutPageData?.missionIcon
    ? urlFor(aboutPageData.missionIcon).width(52).height(52).auto('format').url()
    : undefined

  const visionIconUrl = aboutPageData?.visionIcon
    ? urlFor(aboutPageData.visionIcon).width(52).height(52).auto('format').url()
    : undefined

  const coreValuesItems = aboutPageData?.coreValuesItems?.map((item) => ({
    title: item.title,
    description: item.description,
    iconUrl: item.icon
      ? urlFor(item.icon).width(48).height(48).auto('format').url()
      : undefined,
  }))

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <Banner
        aboutPageData={aboutPageData}
        featuredImageUrl={featuredImageUrl}
        featuredImageAlt={aboutPageData?.featuredImage?.alt}
      />
      <AboutFirm
        aboutPageData={aboutPageData}
        aboutUsImageUrl={aboutUsImageUrl}
        imageAlt={aboutPageData?.aboutUsImage?.alt}
      />
      <MissionVision
        aboutPageData={aboutPageData}
        missionIconUrl={missionIconUrl}
        visionIconUrl={visionIconUrl}
      />
      <FounderProfile aboutPageData={aboutPageData} />
      <CoreValues
        coreValuesTag={aboutPageData?.coreValuesTag}
        coreValuesTitle={aboutPageData?.coreValuesTitle}
        coreValuesDescription={aboutPageData?.coreValuesDescription}
        coreValuesItems={coreValuesItems}
      />
      <Testimonials />
      {/* <PreFooterCTA /> */}
      <ContactCtaSection />
    </main>
  )
}
