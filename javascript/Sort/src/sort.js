var step = 0;
var compare = 0;
var fpsTime = 20;
var Ti = [];

var ShellSort = function(canvas, L)  //希尔排序函数主入口
{
    var left = 0, right = L.length;

    step = 0;
    compare = 0;
    var fps = fpsTime;
    var newLs = [];
    var newLslen = 0;
    canvas.animateStep = 0; canvas.ti = []; 

    var i, j;
    var gap = right - left - 1;
    var temp;
    do {
        gap = parseInt(gap / 3) + 1;
        for (i = left + gap; i <= right; i++) {
            compare++;
            if (L[i] < L[i - gap]) {

                temp = L[i];
                j = i - gap;
                do {
                    L[j + gap] = L[j];
                    j = j - gap;
                    step++;
                    if (true) {
                        newLs[newLslen] = copyArray(L);
                        //console.log(String(newL));
                        Ti[newLslen] = setTimeout(function() {
                            //console.log(newL);
                            updateColumns(canvas, newLs[canvas.animateStep]);
                            canvas.animateStep++;
                            if (canvas.animateStep == newLs.length) {
                                finishSort(canvas)
                                updateColumns(canvas, canvas.sorted);
                            }
                            //console.log(canvas.animateStep);
                        }, fps);
                        newLslen++;
                        fps += fpsTime;
                    }

                } while (j >= left && temp < L[j] && ++compare);
                L[j + gap] = temp;
                if (true) {
                    newLs[newLslen] = copyArray(L);
                    //console.log(String(newL));
                    Ti[newLslen] = setTimeout(function() {
                        //console.log(newL);
                        updateColumns(canvas, newLs[canvas.animateStep]);
                        canvas.animateStep++;
                        if (canvas.animateStep == newLs.length) {
                            finishSort(canvas)
                            updateColumns(canvas, canvas.sorted);
                        }
                        //console.log(canvas.animateStep);
                    }, fps);
                    newLslen++;
                    fps += fpsTime;
                }

            }

        }
    } while (gap > 1);

    var restule = {
        compare: compare,
        step: step
    };
    return restule;
};
ShellSort.name = "希尔排序";

var HeapSort = function(canvas,array) //堆排序函数主入口
{
	step = 0;
    compare = 0;
    var fps = fpsTime;
    var newLs = [];
    var newLslen = 0;
    canvas.animateStep = 0; canvas.ti = [];

	var HeapAdjust = function(array, i, nlength) //堆排序1
	{
		var nChild;
		var nTemp;
		for(nTemp = array[i];2*i+1<nlength;i=nChild)
		{
			nChild=2*i+1;
			if(nChild<nlength-1 && ++compare&&array[nChild+1]>array[nChild])
			{
				++nChild;
			}
			compare++;
			if(nTemp<array[nChild])
			{
				array[i]=array[nChild];
				step++;
																 if (true) {
																newLs[newLslen] = copyArray(array);
																//console.log(String(newL));
																Ti[newLslen] = setTimeout(function() {
																	//console.log(fps);
																	//console.log(newL);
																	updateColumns(canvas, newLs[canvas.animateStep]);
																	canvas.animateStep++;
																	if (canvas.animateStep == newLs.length ) {
																		finishSort(canvas)
																		updateColumns(canvas,canvas.sorted);
																	}
																	//console.log(canvas.animateStep);
																}, fps);
																newLslen++;
																fps += fpsTime;
															}
			}
			else
			{
				break;
			}
			array[nChild]=nTemp;
			step++;

		}
	}
	var length = array.length;
	step++;
	for(var i = parseInt(length/2-1);i>=0;--i)
	{
		HeapAdjust(array,i,length);
	}
	for (i=length-1;i>0;--i)
	{
		var swap = array[0];
		array[0] = array[i];
		array[i] = swap;
		step++;
		HeapAdjust(array,0,i);
																 if (true) {
																newLs[newLslen] = copyArray(array);
																//console.log(String(newL));
																Ti[newLslen] = setTimeout(function() {
																	//console.log(newL);
																	updateColumns(canvas, newLs[canvas.animateStep]);
																	canvas.animateStep++;
																	if (canvas.animateStep == newLs.length ) {
																		finishSort(canvas)
																		updateColumns(canvas,canvas.sorted);
																	}
																	//console.log(canvas.animateStep);
																}, fps);
																newLslen++;
																fps += fpsTime;
															}
	}
    var restule = {
        compare: compare,
        step: step
    };
    return restule;
}
HeapSort.name = "堆排序";

var QuickSort = function (canvas, L)//快速排序
{
	step = 0;
    compare = 0;
    var fps = fpsTime;
    var newLs = [];
    var newLslen = 0;
    canvas.animateStep = 0; canvas.ti = [];

	var Partition = function(Vector, low, high){//定义为数据表类的共有函数，排序算法可直接调用它。
		var pivotpos=low;
		var pivot=Vector[low];  //基准元素
		for(var i = low+1;i<=high;i++)
		{   compare++;
			if(Vector[i]<pivot){       //检测整个序列进行划分
				pivotpos++;
				if(pivotpos!=i) {
				var temp = Vector[pivotpos];
				Vector[pivotpos] = Vector[i];
				Vector[i] = temp;
																 if (true) {
																newLs[newLslen] = copyArray(L);
																//console.log(String(newL));
																Ti[newLslen] = setTimeout(function() {
																	//console.log(newL);
																	updateColumns(canvas, newLs[canvas.animateStep]);
																	canvas.animateStep++;
																	if (canvas.animateStep == newLs.length ) {
																		finishSort(canvas)
																		updateColumns(canvas,canvas.sorted);
																	}
																	//console.log(canvas.animateStep);
																}, fps);
																newLslen++;
																fps += fpsTime;
															}
				}
			}
		}						//小于基准的交换到左侧屈
			Vector[low]=Vector[pivotpos];
			Vector[pivotpos]=pivot;
			step++;
			//将基准元素就位
			return pivotpos;            //返回基准元素位置
	};

	var Quick = function(L,left, right){
		if(left<right){				//元素序列长度大于1时
			var pivotpos= Partition( L,left,right);   //划分
			Quick(L,left,pivotpos-1);    //对左侧子序列实行同样处理
			Quick(L,pivotpos+1,right);  //对右侧子序列实行同样处理
			//元素序列长度<=1时不处理
		}
	};

	Quick(L,0,L.length-1);

    var restule = {
        compare: compare,
        step: step
    };
    return restule;
}
QuickSort.name = "快速排序";

var InsertSort = function(canvas,a)//直接插入排序
{
    step = 0;
    compare = 0;
    var fps = fpsTime;
    var newLs = [];
    var newLslen = 0;
    canvas.animateStep = 0; canvas.ti = [];

	var temp,i,j,high = a.length;
	for (i = 1; i<high; ++i)
	{
		temp = a[i];
		//step++;
		for (j = i; j>0 &&++compare&& temp < a[j-1];--j)
		{
			a[j] = a[j-1];
			step++;
																 if (true) {
																newLs[newLslen] = copyArray(a);
																//console.log(String(newL));
																Ti[newLslen] = setTimeout(function() {
																	//console.log(newL);
																	updateColumns(canvas, newLs[canvas.animateStep]);
																	canvas.animateStep++;
																	if (canvas.animateStep == newLs.length ) {
																		finishSort(canvas)
																		updateColumns(canvas,canvas.sorted);
																	}
																	//console.log(canvas.animateStep);
																}, fps);
																newLslen++;
																fps += fpsTime;
															}
		}
		a[j] = temp;
	}
	 var restule = {
        compare: compare,
        step: step
    };
    return restule;
}
InsertSort.name = "直接插入排序";

var BubbleSort = function(canvas , ary) //冒泡排序算法实现体
{
    step = 0;
    compare = 0;
    var fps = fpsTime;
    var newLs = [];
    var newLslen = 0;
    canvas.animateStep = 0; canvas.ti = [];

	var i, j,length = ary.length;
	for(i=1; i<length; i++)
	{
		for(j=length-1; j>=i; j--)
		{
			//找到数组中最小的数，并交换
			compare++;
			if(ary[j-1] > ary[j])
			{
				var temp = ary[j-1];
				ary[j-1] = ary[j];
				ary[j] = temp;
				step++;
																 if (true) {
																newLs[newLslen] = copyArray(ary);
																//console.log(String(newL));
																Ti[newLslen] = setTimeout(function() {
																	//console.log(newL);
																	updateColumns(canvas, newLs[canvas.animateStep]);
																	canvas.animateStep++;
																	if (canvas.animateStep == newLs.length ) {
																		finishSort(canvas)
																		updateColumns(canvas,canvas.sorted);
																	}
																	//console.log(canvas.animateStep);
																}, fps);
																newLslen++;
																fps += fpsTime;
															}


			}
		}
	}

	 var restule = {
        compare: compare,
        step: step
    };
    return restule;
}
BubbleSort.name = "冒泡排序";

var MergeSort = function (canvas, L)//二路归并排序
{
    step = 0;
    compare = 0;
    var fps = fpsTime;
    var newLs = [];
    var newLslen = 0;
    canvas.animateStep = 0; canvas.ti = [];

	var merge = function(L1 , L2 ,  left,  mid,  right){
		for(var k = left; k<=right; k++)
			L2[k]=L1[k];
			var s1=left,s2=mid+1,t=left;   //s1,s2是检测指针,t是存放指针
			while(s1<=mid&&s2<=right)
			{
				if(L2[s1]<=L2[s2])  
					L1[t++]=L2[s1++];
				else
				{L1[t++]=L2[s2++];step++;}
				compare++;
														  	 if (true) {
																newLs[newLslen] = copyArray(L1);
																//console.log(String(newL));
																Ti[newLslen] = setTimeout(function() {
																	//console.log(newL);
																	updateColumns(canvas, newLs[canvas.animateStep]);
																	canvas.animateStep++;
																	if (canvas.animateStep == newLs.length ) {
																		finishSort(canvas)
																		updateColumns(canvas,canvas.sorted);
																	}
																	//console.log(canvas.animateStep);
																}, fps);
																newLslen++;
																fps += fpsTime;
															}

			}
			while(s1<=mid) 
			{
				L1[t++]=L2[s1++];
				if (t!=s1)
						step++;
														  	 if (true) {
																newLs[newLslen] = copyArray(L1);
																//console.log(String(newL));
																Ti[newLslen] = setTimeout(function() {
																	//console.log(newL);
																	updateColumns(canvas, newLs[canvas.animateStep]);
																	canvas.animateStep++;
																	if (canvas.animateStep == newLs.length ) {
																		finishSort(canvas)
																		updateColumns(canvas,canvas.sorted);
																	}
																	//console.log(canvas.animateStep);
																}, fps);
																newLslen++;
																fps += fpsTime;
															}

			}
			while(s2<=right) 
			{
				L1[t++]=L2[s2++];
					if (t!=s2)
					step++;
														  	 if (true) {
																newLs[newLslen] = copyArray(L1);
																//console.log(String(newL));
																Ti[newLslen] = setTimeout(function() {
																	//console.log(newL);
																	updateColumns(canvas, newLs[canvas.animateStep]);
																	canvas.animateStep++;
																	if (canvas.animateStep == newLs.length ) {
																		finishSort(canvas)
																		updateColumns(canvas,canvas.sorted);
																	}
																	//console.log(canvas.animateStep);
																}, fps);
																newLslen++;
																fps += fpsTime;
															}


			}
	};

	var mergeSort = function( L , L2 , left ,  right){
		if(left>=right) return;
		var mid=parseInt((left+right)/2);
		mergeSort(L,L2,left,mid);
		mergeSort(L,L2,mid+1,right);
		merge(L,L2,left,mid,right);
	};


	var L2 = [];
	mergeSort(L,L2,0,L.length-1);

    var restule = {
        compare: compare,
        step: step
    };
    return restule;
}
MergeSort.name = "二路归并排序";