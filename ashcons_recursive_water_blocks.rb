def waterBlocks(arr, total = 0)
    if arr.length == 2
        return total
    end

    bucket_min = [arr[0], arr[-1]].min;
    new_arr = arr.dup
    temp_total = total

    arr[1..-2].each_with_index do |num, idx|
        if (num < bucket_min)
            temp_total += bucket_min - num
            new_arr[idx + 1] = bucket_min
        end
    end

    if arr[0] > arr[-1]
        waterBlocks(new_arr[0..-2], temp_total)
    else 
        waterBlocks(new_arr[1..-1], temp_total)
    end
end

p waterBlocks([4, 3, 2, 1, 4, 2])
