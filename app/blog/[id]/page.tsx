import BlogDetail from '@/components/blog/BlogDetail';
import React from 'react'

function BlogDetailPage() {

    const blog = {
        title: "Understanding Property Disputes in India",
        subtitle: "Legal Rights of Property Owners in India",
        slug: "understanding-property-disputes-in-india",
        category: "Property Law",
        image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
        publishedAt: "2026-06-10",
        excerpt:
            "Property disputes are among the most common legal matters faced by individuals and businesses.",
        author: "Advocate Rahul Patel",
        authorImage: "/avatar-one.jpg",
        authorDescription: "Practicing advocate with 15+ years of experience in civil, real estate and corporate law.",
        content: `
            <p>
                Property disputes can arise due to ownership conflicts,
                inheritance issues, boundary disagreements, or
                contractual breaches.
            </p>
    
            <ul>
                <li>Inheritance disagreements</li>
                <li>Boundary conflicts</li>
                <li>Title ownership issues</li>
                <li>Fraudulent transactions</li>
            </ul>
    
            <h2>Legal Remedies</h2>
    
    
            <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
                alt="Legal documents"
            />
    
            <p>
                Seeking professional legal advice early can help
                prevent costly and lengthy litigation.
            </p>
        `,
    };
    return (
        <BlogDetail blog={blog} />
    )
}

export default BlogDetailPage