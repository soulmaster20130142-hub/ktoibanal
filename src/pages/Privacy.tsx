import PolicyLayout from "@/components/PolicyLayout";

const Privacy = () => (
  <PolicyLayout title="Privacy Policy" date="February 19, 2026">
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      Koti Banal Villa Resort is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you use our website or services.
    </p>

    <h3 className="font-display text-xl text-foreground">Information We Collect</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      We collect information you provide directly, such as your name, email address, phone number, and booking details when you make a reservation or contact us. We may also collect usage data through cookies and analytics tools to improve our services.
    </p>

    <h3 className="font-display text-xl text-foreground">How We Use Your Information</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      Your information is used to process bookings, communicate with you about your stay, improve our services, and send promotional offers (with your consent). We never sell your personal data to third parties.
    </p>

    <h3 className="font-display text-xl text-foreground">Data Security</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      We implement industry-standard security measures to protect your personal information. All sensitive data is encrypted during transmission and stored securely on our servers.
    </p>

    <h3 className="font-display text-xl text-foreground">Cookies</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      Our website uses cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings. Essential cookies are required for the website to function properly.
    </p>

    <h3 className="font-display text-xl text-foreground">Your Rights</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact us at <strong className="text-foreground">privacy@kotibanal.com</strong>.
    </p>

    <h3 className="font-display text-xl text-foreground">Contact Us</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      If you have any questions about this Privacy Policy, please contact our data protection officer at <strong className="text-foreground">privacy@kotibanal.com</strong> or call us at <strong className="text-foreground">+91 98765 43210</strong>.
    </p>
  </PolicyLayout>
);

export default Privacy;
