// src/components/FeatureIcons.js

import React from 'react';

// A generic Icon wrapper for consistent sizing and accessibility
const Icon = ({ children, label }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label={label}
  >
    {children}
  </svg>
);

export const AiIcon = () => (
  <Icon label="AI Guidance Icon">
    <path d="M12 8V4H8" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 2v2" />
    <path d="M9 2v2" />
  </Icon>
);

export const AnalyticsIcon = () => (
  <Icon label="Accreditation Analytics Icon">
    <path d="M2.5 2v6l6.5-4.5L15.5 8V2z" />
    <path d="m15.5 12-3-2-6.5 4.5v6l6.5-4.5 6.5 4.5v-6z" />
  </Icon>
);

export const MultiPlatformIcon = () => (
  <Icon label="Multi-platform Access Icon">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h8" />
    <path d="M8 10h8" />
    <path d="M8 14h4" />
  </Icon>
);

export const SecurityIcon = () => (
  <Icon label="Security Icon">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Icon>
);

export const AlumniIcon = () => (
  <Icon label="Alumni Network Icon">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);

export const ChatbotIcon = () => (
  <Icon label="Chatbot Icon">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2z" />
  </Icon>
);