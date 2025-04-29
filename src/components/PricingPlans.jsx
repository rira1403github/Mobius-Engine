import React from 'react';
import './PricingPlans.css';

function PricingPlans() {
  const plans = [
    {
      title: 'April Promo',
      price: '$35',
      frequency: '/week',
      features: [
        'Curated jobs from 1M+ listings, refreshed every 48 hours',
        'Up to 20 human-applied roles per week (no bots — just real company sites)',
        'Need more? Add extra apps for just $15 each',
        'Your own dedicated application analyst',
        'Personalized with up to 10 filters & 5 job titles'
      ],
      buttonText: 'Get Started →',
    },
    {
      title: 'Starter',
      price: '$50',
      frequency: '/week',
      features: [
        'All the perks of the Promo Plan, plus:',
        'Resume review & story-focused feedback',
        'Dedicated search specialist',
        'Up to 50 job apps/week',
        'Extra apps at $15 each',
        'Analyst support within 6 hours (SLA/PST hours)'
      ],
      popular: true,
      buttonText: 'Get Started →',
    },
    {
      title: 'Plus',
      price: '$100',
      frequency: '/week',
      features: [
        'Everything in Starter, with more muscle:',
        'Up to 75 apps/week',
        'Apply to 15 job titles',
        'Analyst + full application team on Pacific hours'
      ],
      buttonText: 'Get Started →',
    },
  ];

  return (
    <section className="pricing-section">
      <h2 className="pricing-heading">Job Application Service Plans</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Popular</div>}
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">
              {plan.price}<span className="plan-frequency">{plan.frequency}</span>
            </p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="checkmark">✔</span> {feature}
                </li>
              ))}
            </ul>
            <button className="plan-button">{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingPlans;
