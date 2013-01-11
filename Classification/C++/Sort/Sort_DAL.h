// Sort_DAL.h
// 本代码提取自动态链接库源码，必要请自己更改命名空间。
// 版权所有Copyright © 21:22 2013/1/11

#pragma once
#include <ctime>
#include <iostream>
using namespace System;


namespace Sort_DAL {
	public ref class SortData{
		public: int sortdelay;
		public:unsigned  long comparetimes;
		public: unsigned  long swaptimes;
	};
	public ref class Sort
	{


	typedef int RecType;
	public:	Sort();

	public:	int  BubbleSort(int* ary, int length);//冒泡排序算法

	private: int Partition(int*Vector,const int low,const int high);
	public:	void QuickSort(int* L, const int left, const int right);//快速排序

	private:	void merge(int* L1,int*L2,const int left,const int mid,const int right);
	private:	void mergeSort(int*L,int*L2,int left,int right);
	public:	void MergeSort(int*L,int right);//二路归并排序

	public: void ShellSort(int L[],int right);//希尔排序

	private:	void HeapAdjust(int array[],int i,int nlength);
	public:	void HeapSort(int array[],int length);  //堆排序函数主入口……5

	public:	void InsertSort(int a[], int n); //直接插入……6

	public:	void GetReturn(int* p)
		{
			finish=clock();
			time=finish-start;
			p[0]=time;
			p[1]=compare;
			p[2]=step;
			//return p;
		}

	private:
		clock_t start,finish;
		int time;
		unsigned long step,compare;//step(移动次数),compare(比较次数)

		// TODO: 在此处添加此类的方法。


	};
	Sort::Sort(){
		step=0;compare=0;start=clock();
	}



	void Sort::ShellSort(int L[],int right)   //希尔排序函数主入口
	{
		int left=0;

		int i,j;
		int gap=right-left-1;
			int temp;
			do
			{
				gap=gap/3+1;
				for (i=left+gap;i<=right;i++)

					{
						compare++;
						if (L[i]<L[i-gap])

						{

							temp=L[i];
							j=i-gap;
							do
							{
								L[j+gap]=L[j];
								j=j-gap;
								step++;
							} while (j>=left&& temp<L[j]&&++compare);
							L[j+gap]=temp;
					}

				}
			} while (gap>1);


	};


	
	void Sort::HeapAdjust(int array[],int i,int nlength) //堆排序1
	{


		int nChild;
		int nTemp;
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
			}
			else
			{
				break;
			}
			array[nChild]=nTemp;
			step++;

		}
	}

	void Sort::HeapSort(int array[],int length) //堆排序函数主入口
	{
		step++;
		for(int i = length/2-1;i>=0;--i)
		{
			HeapAdjust(array,i,length);
		}
		for (int i=length-1;i>0;--i)
		{
			int swap = array[0];
			array[0] = array[i];
			array[i] = swap;
			step++;
			HeapAdjust(array,0,i);
		}
		
	}

	void Sort::InsertSort(int a[], int high)//直接插入排序
	{
		int temp,i,j;
		for (i = 1; i<high; ++i)
		{
			temp = a[i];
			//step++;
			for (j = i; j>0 &&++compare&& temp < a[j-1];--j)
			{
				a[j] = a[j-1];
				step++;
			}
			a[j] = temp;
			//step++;
		}
	}

	

	int Sort::BubbleSort(int* ary, int length) //冒泡排序算法实现体
	{

		int i, j;
		for(i=1; i<length; i++)
		{
			for(j=length-1; j>=i; j--)
			{
				//找到数组中最小的数，并交换
				compare++;
				if(ary[j-1] > ary[j])
				{
					int temp = ary[j-1];
					ary[j-1] = ary[j];
					ary[j] = temp;
					step++;
				}
			}
		}


		return *ary;
	};

	
	int Sort::Partition(int*Vector,const int low,const int high){//定义为数据表类的共有函数，排序算法可直接调用它。
		int pivotpos=low;
		int pivot=Vector[low];  //基准元素
		for(int i = low+1;i<=high;i++)
		{   compare++;
			if(Vector[i]<pivot){       //检测整个序列进行划分
				pivotpos++;
				if(pivotpos!=i)
				{
					int temp = Vector[pivotpos];
					Vector[pivotpos] = Vector[i];
					Vector[i]=temp;
				}
			}
		}						//小于基准的交换到左侧屈
			Vector[low]=Vector[pivotpos];
			Vector[pivotpos]=pivot;
			step++;
			//将基准元素就位
			return pivotpos;            //返回基准元素位置
	};

	void Sort::QuickSort(int* L, const int left, const int right){
		if(left<right){				//元素序列长度大于1时
			int pivotpos= Partition( L,left,right);   //划分
			QuickSort(L,left,pivotpos-1);    //对左侧子序列实行同样处理
			QuickSort(L,pivotpos+1,right);  //对右侧子序列实行同样处理
			//元素序列长度<=1时不处理
		}
	};

	
	void Sort::merge(int* L1,int*L2,const int left,const int mid,const int right)
	{
		for(int k = left; k<=right; k++)
			L2[k]=L1[k];
			int s1=left,s2=mid+1,t=left;   //s1,s2是检测指针,t是存放指针
			while(s1<=mid&&s2<=right)
			{
				if(L2[s1]<=L2[s2])  
					L1[t++]=L2[s1++];
				else
				{L1[t++]=L2[s2++];step++;}
				compare++;
			}
			while(s1<=mid) 
			{
				L1[t++]=L2[s1++];
				if (t!=s1)
						step++;
				
			}
			while(s2<=right) 
			{
				L1[t++]=L2[s2++];
					if (t!=s2)
					step++;
			}
	};


	void Sort::mergeSort(int*L,int*L2,int left,int right){
		if(left>=right) return;
		int mid=(left+right)/2;
		mergeSort(L,L2,left,mid);
		mergeSort(L,L2,mid+1,right);
		merge(L,L2,left,mid,right);
	};

	void Sort::MergeSort(int*L,int right){
		int *L2 = new int[right];
		mergeSort(L,L2,0,right);

	}


}
