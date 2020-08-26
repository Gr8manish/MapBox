import React from 'react';

interface HomeData {
  isLoading: boolean;
  error?: Error;
}

const useFetchHomeData = (pathname: string, matchParams: {}): HomeData => {
  const [data, updateData] = React.useState<HomeData>({
    isLoading: true,
  });

  const fetchData = async (): Promise<void> => {
    try {
      updateData({
        ...data,
        isLoading: false,
      });
    } catch (error) {
      console.log(`RouteFetchDataError: ${error}`);
      updateData({
        ...data,
        isLoading: false,
        error: error,
      });
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};

export { useFetchHomeData };
