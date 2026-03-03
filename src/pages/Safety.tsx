import PolicyLayout from "@/components/PolicyLayout";

const Safety = () => (
  <PolicyLayout title="Safety Guidelines" date="February 19, 2026">
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      We prioritize guest safety above all else. Our resort is built using traditional seismic-resistant Koti Banal architecture, providing a secure sanctuary in the heart of the Himalayas. Please observe the following guidelines to ensure a safe and enjoyable stay.
    </p>

    <h3 className="font-display text-xl text-foreground">General Safety</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      Please follow all on-site signage and instructions from our staff. Respect the natural environment and maintain awareness when exploring our forest trails.
    </p>

    <h3 className="font-display text-xl text-foreground">Pool & Activities</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      Observe all pool safety rules. Children must be supervised by an adult at all times in the swimming pool and horse riding areas. Diving is strictly prohibited in shallow areas.
    </p>

    <h3 className="font-display text-xl text-foreground">Fire Safety</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      During bonfire evenings, please maintain a safe distance from the fire pit. Smoking is only permitted in designated outdoor areas. Each villa is equipped with fire extinguishers and clearly marked exit routes.
    </p>

    <h3 className="font-display text-xl text-foreground">Health & Emergencies</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      Our staff are trained in basic first aid. We maintain coordinates with the nearest medical facilities in Haridwar for any emergency requirements. Please notify the reception immediately of any health concerns.
    </p>
  </PolicyLayout>
);

export default Safety;
