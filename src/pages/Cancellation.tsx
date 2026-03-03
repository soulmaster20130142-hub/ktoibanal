import PolicyLayout from "@/components/PolicyLayout";

const Cancellation = () => (
  <PolicyLayout title="Cancellation Policy" date="February 19, 2026">
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      We understand that plans can change. Our cancellation policy is designed to be fair to both our guests and our dedicated staff who prepare for your arrival.
    </p>

    <h3 className="font-display text-xl text-foreground">Standard Cancellation</h3>
    <ul className="list-disc list-inside space-y-2 font-body text-sm text-muted-foreground">
      <li><strong className="text-foreground">Up to 7 days before check-in:</strong> Free cancellation with a full refund.</li>
      <li><strong className="text-foreground">3-7 days before arrival:</strong> 50% of the total booking amount will be charged.</li>
      <li><strong className="text-foreground">Within 3 days of arrival:</strong> Non-refundable.</li>
    </ul>

    <h3 className="font-display text-xl text-foreground">Special Circumstances</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      For group bookings (3 or more villas) or peak season holiday packages, separate terms may apply. These will be clearly communicated at the time of booking.
    </p>

    <h3 className="font-display text-xl text-foreground">How to Cancel</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      To initiate a cancellation, please contact our guest relations team at <strong className="text-foreground">bookings@kotibanal.com</strong> or use the contact form on our website. Please provide your booking reference number for faster processing.
    </p>

    <h3 className="font-display text-xl text-foreground">Travel Insurance</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      We highly recommend travel insurance to protect your investment in case of unforeseen circumstances or travel disruptions.
    </p>
  </PolicyLayout>
);

export default Cancellation;
