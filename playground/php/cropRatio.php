<?php
class CropRatio
{
    private $totalWeight;
    private $crops = array();

    public function add($name, $cropWeight)
    {
        $currentCropWeight = 0;
        if(!array_key_exists($name, $this->crops)) {
            $this->crops[$name] = $cropWeight;
        }else{
            $currentCropWeight += $cropWeight;
            // $this->crops[$name] += $cropWeight;
            // echo $currentCropWeight;
        }

        $this->totalWeight += $currentCropWeight;
        // $this->totalWeight += $currentCropWeight;
    }

    public function proportion($name)
    {
        return $this->crops[$name] / $this->totalWeight;
    }
}

$cropRatio = new CropRatio;
$cropRatio->add('Wheat', 4);

$cropRatio->add('Wheat', 5);
$cropRatio->add('Rice', 1);

echo "Wheat: " . $cropRatio->proportion('Wheat');
