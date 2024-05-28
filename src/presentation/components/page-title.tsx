interface PageTitleProps {
  children: React.ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}
