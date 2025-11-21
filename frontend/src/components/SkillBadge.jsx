
export const SkillBadge = ({iconName:Icon, heading}) => {
  return (
    <div className="inline-flex gap-4 px-6 py-3 items-center rounded-2xl bg-neutral-800 text-white">
      <Icon className="text-3xl md:text-4xl" />
      <h1 className="text-xl md:text-2xl">{heading}</h1>
    </div>
  );
};
