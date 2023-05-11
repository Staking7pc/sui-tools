    import React from 'react'
    import './Cards.css'
    export default function Cards() {
        return (

            <body>
                <div class="container">
                    <div class="heading">
                        <h4>RPC Stats for Sui</h4>
                    </div>
                    <div class="row">
                        <div class="card">
                            <div class="card-header">
                                <h3>RPC endpoints</h3>
                            </div>
                            <div class="card-body">
                                <p>
                                    We gather endpoints from github link, create a PR if new links needs to be added
                                </p>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Brightlystake/sui/blob/main/mainnet-rpc.txt" class="btn">Github link</a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h3>Update Frequency</h3>
                            </div>
                            <div class="card-body">
                                <p>
                                    We run an RPC calls every 5 minute sui_getLatest CheckpointSequenceNumber and publish the results.
                                </p>
                                <a target="_blank" rel="noopener noreferrer" href="" class="btn">Every 5 mins</a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h3>Discrepancies</h3>
                            </div>
                            <div class="card-body">
                                <p>
                                    If you encounter any descrepancies please feel free to contact us from the link below.
                                </p>
                                <a target="_blank" rel="noopener noreferrer" href="https://linktr.ee/brightlystake" class="btn">Socials</a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h3>Add more details</h3>
                            </div>
                            <div class="card-body">
                                <p>
                                    This is just an experiment if you have thoughts around getting this better, we are open
                                </p>
                                <a target="_blank" rel="noopener noreferrer" href="https://linktr.ee/brightlystake" class="btn">Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
