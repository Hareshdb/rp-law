import BlogDetail from '@/components/blog/BlogDetail';
import React from 'react'

function BlogDetailPage() {

    const blog = {
        title: "Understanding Property Disputes in India",
        slug: "understanding-property-disputes-in-india",
        category: "Property Law",
        image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
        publishedAt: "2026-06-10",
        excerpt:
            "Property disputes are among the most common legal matters faced by individuals and businesses.",

        content: `
            <h2>Introduction</h2>
    
            <p>
                Property disputes can arise due to ownership conflicts,
                inheritance issues, boundary disagreements, or
                contractual breaches.
            </p>
    
            <p>
                Understanding your legal rights is essential to
                resolving such disputes effectively.
            </p>
    
            <blockquote>
                Proper documentation is often the strongest evidence
                in a property dispute.
            </blockquote>
    
            <h2>Common Causes</h2>
    
            <ul>
                <li>Inheritance disagreements</li>
                <li>Boundary conflicts</li>
                <li>Title ownership issues</li>
                <li>Fraudulent transactions</li>
            </ul>
    
            <h2>Legal Remedies</h2>
    
            <p>
                Depending on the circumstances, parties may pursue
                negotiation, mediation, arbitration, or court
                proceedings.
            </p>
    
            <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
                alt="Legal documents"
            />
    
            <h2>Conclusion</h2>
    
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