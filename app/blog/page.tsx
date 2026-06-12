import BlogListing from '@/components/blog/BlogList'

function BlogPage() {

  const blogsData = [
    {
      id: "1",
      title: "Understanding Property Disputes in India",
      slug: "understanding-property-disputes-in-india",
      excerpt:
        "Learn about common property disputes, legal remedies, and the steps involved in resolving ownership conflicts efficiently.Learn about common property disputes, legal remedies, and the steps involved in resolving ownership conflicts efficiently",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      category: "Property Law",
      publishedAt: "2026-06-01",
    },
    {
      id: "2",
      title: "What to Do After Receiving a Legal Notice",
      slug: "what-to-do-after-receiving-a-legal-notice",
      excerpt:
        "Receiving a legal notice can be stressful. This guide explains the appropriate actions and how to protect your rights.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      category: "Civil Law",
      publishedAt: "2026-05-28",
    },
    {
      id: "3",
      title: "Key Points to Include in a Business Contract",
      slug: "key-points-to-include-in-business-contract",
      excerpt:
        "A well-drafted contract minimizes disputes and protects all parties. Discover the essential clauses every contract should contain.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      category: "Corporate Law",
      publishedAt: "2026-05-20",
    },
    {
      id: "4",
      title: "The Complete Guide to Divorce Proceedings",
      slug: "complete-guide-to-divorce-proceedings",
      excerpt:
        "Understand the legal process, documentation requirements, and timelines involved in divorce proceedings.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      category: "Family Law",
      publishedAt: "2026-05-15",
    },
    {
      id: "5",
      title: "How Startups Can Protect Intellectual Property",
      slug: "startups-protect-intellectual-property",
      excerpt:
        "Explore trademarks, copyrights, patents, and practical steps startups can take to safeguard their innovations.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      category: "IP Law",
      publishedAt: "2026-05-10",
    },
    {
      id: "6",
      title: "Employee Rights Every Professional Should Know",
      slug: "employee-rights-every-professional-should-know",
      excerpt:
        "A comprehensive overview of workplace rights, employer obligations, and remedies available under labor laws.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      category: "Employment Law",
      publishedAt: "2026-05-05",
    },
    {
      id: "7",
      title: "Consumer Protection Laws Explained",
      slug: "consumer-protection-laws-explained",
      excerpt:
        "Discover how consumer protection laws help individuals seek compensation and resolve disputes effectively.",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      category: "Consumer Law",
      publishedAt: "2026-04-29",
    },
    {
      id: "8",
      title: "Legal Steps for Recovering Outstanding Payments",
      slug: "legal-steps-for-recovering-outstanding-payments",
      excerpt:
        "Businesses often struggle with unpaid invoices. Learn the legal avenues available for debt recovery.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
      category: "Business Law",
      publishedAt: "2026-04-22",
    },
    {
      id: "9",
      title: "Everything You Need to Know About Bail",
      slug: "everything-you-need-to-know-about-bail",
      excerpt:
        "An overview of bail procedures, eligibility criteria, and the rights of accused individuals under the law.",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744",
      category: "Criminal Law",
      publishedAt: "2026-04-15",
    },
    {
      id: "10",
      title: "Why Estate Planning is Important for Families",
      slug: "why-estate-planning-is-important-for-families",
      excerpt:
        "Estate planning helps secure your family's future by ensuring assets are distributed according to your wishes.",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
      category: "Estate Planning",
      publishedAt: "2026-04-08",
    },
  ];

  return (
    <div className='bg-background'>
      <BlogListing blogs={blogsData} />
    </div>
  )
}

export default BlogPage