import BlogDetail from "@/components/blog/BlogDetail";
import type { PortableTextBlock } from "@/lib/portable-text";

const blogContent: PortableTextBlock[] = [
    {
        _type: "block",
        _key: "intro-p",
        style: "normal",
        markDefs: [],
        children: [
            {
                _type: "span",
                _key: "intro-s",
                text: "Property disputes can arise due to ownership conflicts, inheritance issues, boundary disagreements, or contractual breaches. Understanding your legal rights is the first step toward resolution.",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "causes-h2",
        style: "h2",
        markDefs: [],
        children: [
            {
                _type: "span",
                _key: "causes-s",
                text: "Common Causes of Property Disputes",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "cause-1",
        style: "normal",
        markDefs: [],
        listItem: "bullet",
        level: 1,
        children: [
            {
                _type: "span",
                _key: "cause-1-s",
                text: "Inheritance disagreements among legal heirs",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "cause-2",
        style: "normal",
        markDefs: [],
        listItem: "bullet",
        level: 1,
        children: [
            {
                _type: "span",
                _key: "cause-2-s",
                text: "Boundary conflicts with neighboring properties",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "cause-3",
        style: "normal",
        markDefs: [],
        listItem: "bullet",
        level: 1,
        children: [
            {
                _type: "span",
                _key: "cause-3-s",
                text: "Title ownership and documentation issues",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "cause-4",
        style: "normal",
        markDefs: [],
        listItem: "bullet",
        level: 1,
        children: [
            {
                _type: "span",
                _key: "cause-4-s",
                text: "Fraudulent transactions or forged documents",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "rights-h2",
        style: "h2",
        markDefs: [],
        children: [
            {
                _type: "span",
                _key: "rights-s",
                text: "Ownership Rights",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "rights-p",
        style: "normal",
        markDefs: [],
        children: [
            {
                _type: "span",
                _key: "rights-p-s",
                text: "Property ownership in India is governed by a combination of central and state laws. Owners have the right to possess, use, and transfer property, subject to applicable regulations and encumbrances recorded on the title.",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "rights-h3",
        style: "h3",
        markDefs: [],
        children: [
            {
                _type: "span",
                _key: "rights-h3-s",
                text: "Key Rights Every Owner Should Know",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "right-1",
        style: "normal",
        markDefs: [],
        listItem: "number",
        level: 1,
        children: [
            {
                _type: "span",
                _key: "right-1-s",
                text: "Right to peaceful possession of the property",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "right-2",
        style: "normal",
        markDefs: [],
        listItem: "number",
        level: 1,
        children: [
            {
                _type: "span",
                _key: "right-2-s",
                text: "Right to seek legal protection against trespass",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "quote",
        style: "blockquote",
        markDefs: [],
        children: [
            {
                _type: "span",
                _key: "quote-s",
                text: "Property ownership is not merely possession, but also legal recognition and protection under the law.",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "remedies-h2",
        style: "h2",
        markDefs: [],
        children: [
            {
                _type: "span",
                _key: "remedies-s",
                text: "Legal Remedies",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "remedies-p",
        style: "normal",
        markDefs: [],
        children: [
            {
                _type: "span",
                _key: "remedies-p-s",
                text: "Seeking professional legal advice early can help prevent costly and lengthy litigation. Depending on the nature of the dispute, remedies may include civil suits, injunctions, or alternative dispute resolution.",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "remedies-h3",
        style: "h3",
        markDefs: [],
        children: [
            {
                _type: "span",
                _key: "remedies-h3-s",
                text: "Steps to Take When a Dispute Arises",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "step-1",
        style: "normal",
        markDefs: [],
        listItem: "number",
        level: 1,
        children: [
            {
                _type: "span",
                _key: "step-1-s",
                text: "Gather all property documents and correspondence",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "step-2",
        style: "normal",
        markDefs: [],
        listItem: "number",
        level: 1,
        children: [
            {
                _type: "span",
                _key: "step-2-s",
                text: "Consult a qualified property law attorney",
                marks: [],
            },
        ],
    },
    {
        _type: "block",
        _key: "step-3",
        style: "normal",
        markDefs: [],
        listItem: "number",
        level: 1,
        children: [
            {
                _type: "span",
                _key: "step-3-s",
                text: "Explore mediation before initiating formal proceedings",
                marks: [],
            },
        ],
    },
];

const relatedBlogs = [
    {
        id: "2",
        title: "What to Do After Receiving a Legal Notice",
        slug: "what-to-do-after-receiving-a-legal-notice",
        excerpt:
            "Receiving a legal notice can be stressful. This guide explains the appropriate actions and how to protect your rights.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
        category: "Civil Law",
        publishedAt: "2026-05-28",
    },
    {
        id: "3",
        title: "Key Points to Include in a Business Contract",
        slug: "key-points-to-include-in-business-contract",
        excerpt:
            "A well-drafted contract minimizes disputes and protects all parties. Discover the essential clauses every contract should contain.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        category: "Corporate Law",
        publishedAt: "2026-05-20",
    },
    {
        id: "4",
        title: "The Complete Guide to Divorce Proceedings",
        slug: "complete-guide-to-divorce-proceedings",
        excerpt:
            "Understand the legal process, documentation requirements, and timelines involved in divorce proceedings.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
        category: "Family Law",
        publishedAt: "2026-05-15",
    },
];

function BlogDetailPage() {
    const blog = {
        title: "Understanding Property Disputes in India",
        subtitle: "Legal Rights of Property Owners in India",
        slug: "understanding-property-disputes-in-india",
        category: "Property Law",
        image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80",
        publishedAt: "2026-06-10",
        excerpt:
            "Property disputes are among the most common legal matters faced by individuals and businesses.",
        author: "Advocate Rahul Patel",
        authorImage: "/avatar-one.jpg",
        authorDescription:
            "Practicing advocate with 15+ years of experience in civil, real estate and corporate law.",
        content: blogContent,
    };

    return <BlogDetail blog={blog} relatedBlogs={relatedBlogs} />;
}

export default BlogDetailPage;
