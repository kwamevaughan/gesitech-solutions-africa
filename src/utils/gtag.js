// Google Analytics utility functions
export const GA_TRACKING_ID = 'G-HVJMDKHDND';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for Gesitech
export const trackContactFormSubmit = () => {
  event({
    action: 'submit_form',
    category: 'Contact',
    label: 'LPG Quote Request',
  });
};

export const trackContactModalOpen = () => {
  event({
    action: 'open_modal',
    category: 'Contact',
    label: 'Contact Modal',
  });
};

export const trackServiceInterest = (service) => {
  event({
    action: 'service_interest',
    category: 'Services',
    label: service,
  });
};

export const trackTeamMemberView = (memberName) => {
  event({
    action: 'view_team_member',
    category: 'Team',
    label: memberName,
  });
};