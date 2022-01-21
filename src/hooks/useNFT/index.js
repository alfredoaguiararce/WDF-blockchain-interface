import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import NFTArtifact from "../../config/web3/artifacts/nft";

const { address, abi } = NFTArtifact;

const useNFT = () => {
  const { active, library, chainId } = useWeb3React();

  const nft = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address[chainId]);
  }, [active, chainId, library?.eth?.Contract]);

  return nft;
};

export default useNFT;