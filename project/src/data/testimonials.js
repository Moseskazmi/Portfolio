const createAvatar = (initials, background) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112">
      <rect width="112" height="112" rx="56" fill="${background}" />
      <text x="56" y="64" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="36" font-weight="700">${initials}</text>
    </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const testimonials = [
  {
    id: 1,
    review:
      "Working with Moses was a great experience. He develops clean, responsive, and modern web applications with excellent attention to detail.",
    name: "Techiguru Team",
    position: "Full Stack Development Mentor",
    image: createAvatar('TT', '#2563EB'),
  },
  {
    id: 2,
    review:
      "Moses is a quick learner, dedicated developer, and an excellent team player during projects and hackathons.",
    name: "Hackathon Teammate",
    position: "Team Member",
    image: createAvatar('HT', '#7C3AED'),
  },
];
