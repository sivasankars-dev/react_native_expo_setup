// wrapper around RTL render()
import { render } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function renderWithProviders(ui: React.ReactElement) {
  const client = new QueryClient();

  return render(
    <QueryClientProvider client={client}>
      {ui}
    </QueryClientProvider>
  );
}
