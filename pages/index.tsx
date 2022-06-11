import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Liquidity Provider Rewards | elimu.ai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Rewards for {' '}
          <a className="text-purple-600" href="https://etherscan.io/token/0xe29797910d413281d2821d5d9a989262c8121cc2">
            $ELIMU
          </a> LPs
        </h1>

        <p className="mt-3 text-2xl">
          Get started by connecting your wallet
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a href="/uniswap" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-purple-600 focus:text-purple-600">
            <h3 className="text-2xl font-bold">Uniswap Liquidity Pool 🦄</h3>
            <p className="mt-4 text-xl">
              <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">$ELIMU/$ETH 50%/50%</code>
            </p>
            <p className="mt-4">
              APY: 0.00%
            </p>
          </a>

          <a href="/sushiswap" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-purple-600 focus:text-purple-600">
            <h3 className="text-2xl font-bold">SushiSwap Liquidity Pool 🍣</h3>
            <p className="mt-4 text-xl">
              <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">$ELIMU/$ETH 50%/50%</code>
            </p>
            <p className="mt-4">
              APY: 0.00%
            </p>
          </a>

          <a href="/balancer" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-purple-600 focus:text-purple-600">
            <h3 className="text-2xl font-bold">Balancer Liquidity Pool ⚖️</h3>
            <p className="mt-4 text-xl">
              <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">$ELIMU/$ETH 80%/20%</code>
            </p>
            <p className="mt-4">
              APY: 0.00%
            </p>
          </a>

          <a href="https://eng.elimu.ai/contributions/aragon-dao" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-purple-600 focus:text-purple-600">
            <h3 className="font-bold">What is <code>$ELIMU</code>? 💎</h3>
            <p>
              <code className="font-mono">$ELIMU</code> is the governance token used by the elimu.ai 
              Community DAO. You can learn more at&nbsp;
              <a href="https://eng.elimu.ai/contributions/aragon-dao" className="text-purple-600">elimu.ai</a>
              &nbsp;and <a href="https://github.com/elimu-ai/wiki#donate-cryptocurrency-eth" className="text-purple-600">https://github.com/elimu-ai/wiki</a>.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Made with 💜 by&nbsp;<a href="https://eng.elimu.ai" className="text-purple-600">elimu.ai</a>
      </footer>
    </div>
  )
}
