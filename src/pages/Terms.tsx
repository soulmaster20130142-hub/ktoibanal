import PolicyLayout from "@/components/PolicyLayout";

const Terms = () => (
  <PolicyLayout title="Terms & Conditions" date="February 19, 2026">
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      These terms govern your use of our website and services. By booking a stay at Koti Banal Villa Resort, you agree to these terms which include payment terms, guest responsibilities, check-in/out policies, and limitations of liability.
    </p>

    <h3 className="font-display text-xl text-foreground">Bookings & Payments</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      All bookings are subject to availability. To secure your reservation, valid payment details must be provided. Full payment terms will be outlined during your booking process based on the selected rate and seasonal requirements.
    </p>

    <h3 className="font-display text-xl text-foreground">Guest Conduct</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      Koti Banal is a heritage sanctuary. Guests are expected to respect the property, follow local regulations, and preserve the peaceful atmosphere of the Himalayas. Damages to the property or architectural heritage may result in additional charges.
    </p>

    <h3 className="font-display text-xl text-foreground">Check-in/Check-out</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      Standard check-in time is 2:00 PM and check-out is 11:00 AM. Early check-in or late check-out is subject to availability and may incur additional fees.
    </p>

    <h3 className="font-display text-xl text-foreground">Liability</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      While we prioritize guest safety with state-of-the-art measures, the resort is not responsible for personal injuries or lost belongings beyond established legal requirements.
    </p>
  </PolicyLayout>
);

export default Terms;
