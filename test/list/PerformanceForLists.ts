import * as Benchmark from 'benchmark';
import {lists} from "../../../scripts/list/lists";

let instancesToBenchmark = [
    new lists.linkedlists.singlelinkedlists.iterative.SingleLinkedList<String>(),
    new lists.linkedlists.singlelinkedlists.iterative.TailedSingleLinkedList<String>()
    /*,
    lists.linkedlists.singlelinkedlists.recursive.SingleLinkedList.class,
*/
];

it('benchmarks', () => {
    instancesToBenchmark.forEach((instanceTobenchmark) => {
            let suite = new Benchmark.Suite;
            suite
                .add('add benchmark for instance ' + instanceTobenchmark.constructor,
                    () => instanceTobenchmark.add("hola" + Math.random())
                )
                .add('emptiness benchmark for instance ' + instanceTobenchmark.constructor,
                    () => instanceTobenchmark.isEmpty()
                )
                .add('size benchmark for instance ' + instanceTobenchmark.constructor,
                    () => instanceTobenchmark.size()
                )
                .add('contains benchmark for instance ' + instanceTobenchmark.constructor,
                    () => instanceTobenchmark.contains("hola" + Math.random())
                )
                .on('cycle', function (event: any) {
                        // add listeners
                        console.log(String(event.target));
                    }
                ).run({'async': true})
        }
    );

});
