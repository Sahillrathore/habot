import {RiInstagramFill,  FaFacebookF,  FaLinkedinIn , FaTwitter} from '../utils/import'
export const STEPS = [
  {
   src:"/profile.png",
    title: "Select Your Role and Sign Up",
    description: "Get started by choosing your role and creating an account"
  },
  {
    src:"/docs.png",
    title: "Buyers Post Your Requirements",
    description: "Share your specific needs and requirements"
  },
  {
    src:"/search.png",
    title: "Review, Select, and Contact the Best Suppliers",
    description: "Find and connect with quality suppliers"
  },
  {
    src:"/buyers.png",
    title: "Suppliers Complete your profile and get notified for opportunities",
    description: "Create your profile and receive relevant opportunities"
  },
  {
    src:"/quote.png",
    title: "Contact to Buyers and Share your Quote for the service",
    description: "Engage with buyers and provide service quotes"
  },
  {
    src:"/handshake.png",
    title: "Both the Parties can Connect and Make Business Leave a Feedback",
    description: "Build relationships and share valuable feedback"
  }
];

export const socialLinks = [
    { icon:  FaLinkedinIn , href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon:  FaFacebookF , href: "#", label: "Facebook" },
    { icon:RiInstagramFill, href: "#", label: "Instagram" }
  ];

  export const footerContent = [
    {
      heading: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "FAQ", href: "#" }
      ]
    },
    {
      heading: "Terms",
      links: [
        { label: "Data privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Accessibility", href: "#" }
      ]
    },
    {
      heading: "Related",
      links: [
        { label: "Find Buyer", href: "#" },
        { label: "Feedback", href: "#" }
      ]
    }
  ];
  