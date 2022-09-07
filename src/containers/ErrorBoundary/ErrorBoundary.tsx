import React, { PropsWithChildren } from "react";
import { ErrorPage } from "../../pages/500";

export class ErrorBoundary extends React.Component<
  PropsWithChildren,
  { hasError: boolean }
> {
  constructor(props: Object) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return <>{this.props.children};</>;
  }
}
