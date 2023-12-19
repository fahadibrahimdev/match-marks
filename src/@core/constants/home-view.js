import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: `Sign Up!<br>Read Reviews!<br>Date!`,
    subHeading: 'Pictures can be Deceiving, but Ratings Don’t Lie!',
    text: 'You would not talk to a stranger; then why go on a date with one. MatchMarks is an innovative dating app that lets you give feedback on your date which makes up the rating on a person’s profile.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Got a date? Check them out on MatchMarks today!',
    subHeading: 'NEVER PLAN A DATE WITHOUT MatchMarks!',
    features: [
        {
            title: 'Make your Profile ',
            description: 'Write a short description about what your interests are and what you are looking for.',
            icon: 'user'
        },
        {
            title: 'Review Your Date',
            description: 'At the end of every date, you get to rate the other individual out of 5 stars.',
            icon: 'profile-rank'
        },
        {
            title: 'Accumulate Ratings',
            description: 'Receive ratings that back up your profile.',
            icon: 'ratings-emojis'
        },
        {
            title: 'Accept or Reject Reviews',
            description: 'If you think a particular feedback was unfair, you can always reject it. However, the amount of unaccepted reviews is visible.',
            icon: 'judgement'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'Don’t you wish you could undo all the bad dates you have ever been on?',
        'MatchMarks simplifies the experience and makes it easier for you to find the person you would click with. The profiles help you find someone who is like-minded or your type. The unique ratings feature helps you narrow down your choices without having to feel anxiety about what that person might be like in person.'
    ],
}

export const benefitsContent = {
    heading: 'They check all the boxes but how do they treat dates?',
    text: 'Do not judge a book by its cover has never rung truer than when you are on a date getting to know someone. Though dating profiles offer basic information they are never enough for one to decide whether they should connect with a potential special someone.',
    benefits: [
        {
            title: 'No More Catfishing',
            description: 'The classic catfishing tactic is emotionally draining. MatchMarks completely eliminates the possibility of someone being the opposite of who they say they are.',
            icon: 'date'
        },
        {
            title: 'It’s Safer',
            description: 'Never worry about what the person you are meeting is going to be like.',
            icon: 'couple-handshake'
        },
        {
            title: 'Values You',
            description: 'MatchMarks understands that your time and experience is important and that with a dating app you should enjoy both.',
            icon: 'couple-love'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is MatchMarks Compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'Can I amend a review?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'Who is this app for?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Find that Special Someone’s Profile Today!',
    text: 'Download MatchMarks and browse through a myriad of profiles so you know who is the really one for you.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: {
            email: 'Email: info@dentistnow.co',
            number: 'Number: 800-370-1060'
        },
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Sign up',
    whyUsBtn: `Why ${siteName}`,
    ctaBtn: 'Download App',
    accent: 'Get Started'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
