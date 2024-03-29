export interface BlockHeader {
  parent_hash: string;
  state_root_hash: string;
  body_hash: string;
  random_bit: boolean;
  accumulated_seed: string;
  era_end: null;
  timestamp: string;
  era_id: number;
  height: number;
  protocol_version: string;
}

export interface BlockBody {
  proposer: string;
  deploy_hashes: string[];
  transfer_hashes: string[];
}

export interface Block {
  hash: string;
  header: BlockHeader;
  body: BlockBody;
  proofs: any[];
}

export const mockBlock: Block = {
  hash: '2f95f1fe0c8d64daee3a7c4aa02e12ac0e2a2d0baf02da602e4e119ccb7fde3e',
  header: {
    parent_hash:
      'aba8922d86b9480c9a755fc3de64ebb0d12f8e46a984685a3fac77f19e388c9a',
    state_root_hash:
      'c7be5d85569a493b474af56d94ffc925db1fd4c48c4425bda06140559fbf072a',
    body_hash:
      '006c899ffb251faecb1e567fba5f9a9c20c383e1c843abcf4576506d293d9fff',
    random_bit: true,
    accumulated_seed:
      '1747ddcfaec39433ca73fef0e9ac9832f50c34f9739d5c12d68f172f022bf4a2',
    era_end: null,
    timestamp: '2023-01-16T15:19:38.240Z',
    era_id: 384,
    height: 4224,
    protocol_version: '1.0.0',
  },
  body: {
    proposer:
      '01c867ff3cf1d4e4e68fc00922fdcb740304def196e223091dee62012f444b9eba',
    deploy_hashes: [],
    transfer_hashes: [],
  },
  proofs: [],
};

export const createMockBlocks = (numberOfBlocks = 10) => {
  const blocks = new Array(numberOfBlocks).fill(mockBlock) as Block[];

  return blocks.map((block, index) => {
    return { ...block, hash: `${block.hash}-${index}` };
  });
};
