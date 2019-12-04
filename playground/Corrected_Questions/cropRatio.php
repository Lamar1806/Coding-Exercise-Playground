<?php
/*
    The CropRatio object can be used to calculate what proportion of a farm's harvest is a specific crop.

    For example:

    $cropRatio = new CropRatio();
    $cropRatio->add("Wheat", 4);
    $cropRatio->add("Wheat", 5);
    $cropRatio->add("Rice", 1);
    Running $cropRatio->proportion("Wheat") should return 0.9.

    I got 0.8 at first

    I fixed this problem by creating get methods for both class variables
    I then was able to determine where the logic had gone wrong!
*/
class CropRatio
{
    private $totalWeight = 0;
    private $crops = array();

    public function add($name, $cropWeight)
    {
        $currentCropWeight = 0;
        if(!array_key_exists($name, $this->crops)) {
            $this->crops[$name] = $cropWeight;
            $this->totalWeight += $cropWeight;
        }else{
            $currentCropWeight += $cropWeight;
            $this->crops[$name] += $cropWeight;
            // echo $currentCropWeight;
        }

        $this->totalWeight += $currentCropWeight;
        // $this->totalWeight += $currentCropWeight;
    }

    public function proportion($name)
    {
        return $this->crops[$name] / $this->totalWeight;
    }

    public function getArray()
    {        
        return $this->crops;
    }
    public function gettotalWeightrops()
    {
        return $this->totalWeight;
    }
}

$cropRatio = new CropRatio;
$cropRatio->add('Wheat', 4);

$cropRatio->add('Wheat', 5);
$cropRatio->add('Rice', 1);


print_r($cropRatio->getArray());
echo 'total weight: ' . $cropRatio->gettotalWeightrops();

echo "\n\nWheat: " . $cropRatio->proportion('Wheat');