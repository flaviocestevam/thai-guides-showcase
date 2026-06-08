interface StructuredDataProps {
  data: object;
}

export const StructuredData = ({ data }: StructuredDataProps) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
};
