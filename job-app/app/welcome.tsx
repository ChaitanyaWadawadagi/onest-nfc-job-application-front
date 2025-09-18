import React from 'react';
import { Welcome } from '../src/features/common/screens/Welcome';

export default function WelcomeRoute() {
  // If the original Welcome screen is empty, show a simple placeholder
  if (!Welcome) return <></>;
  return <Welcome />;
}
